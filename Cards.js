
export class Card {
  constructor(initData, cardSelector) {
    this._name = initData.name;
    this._link = initData.link;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);

    return cardElement;
  }

  // _handleOpenPopup() {
  //   popupImage.src = this._image;
  //   popupElement.classList.add('popup_opened');
  // }

  // _handleClosePopup() {
  //   popupImage.src = '';
  //   popupElement.classList.remove('popup_opened');
  // }

  // _setEventListeners() {
  //   this._element.addEventListener('click', () => {
  //     this._handleOpenPopup();
  //   });

  //   popupCloseButton.addEventListener('click', () => {
  //     this._handleClosePopup();
  //   });
  // }

  generateCard() {
    this._element = this._getTemplate();
    // this._setEventListeners();

    this._element.querySelector('.element__image').src = this._link;
    this._element.querySelector('.element__title').textContent = this._name;

    return this._element;
  }
}
