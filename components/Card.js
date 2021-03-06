export  class Card {
  constructor(cardsData, templateSelector,  onCardClick) {
    this._cardsData = cardsData;
    this._templateSelector = templateSelector;
    this._onCardClick = onCardClick;
  }

  generateCard() {
    this._getTemplate();

    this._element = this._getTemplate();
    this._elementImage = this._element.querySelector('.element__image');
    this._elementTitle = this._element.querySelector('.element__title');
    this._removeButton = this._element.querySelector('.element__remove-button');
    this._likeButton = this._element.querySelector('.element__like-button');

    this._setEventListeners();

    this._elementTitle.textContent = this._cardsData.name;
    this._elementImage.src = this._cardsData.link;
    this._elementImage.alt = this._cardsData.name;

    return this._element;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);
    return cardElement;
  }

  _setEventListeners() {
    this._removeButton.addEventListener('click', this._removeElement);
    this._likeButton.addEventListener('click', this._togglelike);

    this._elementImage.addEventListener('click', this._onCardClick);
  }


  _removeElement (evt) {
    evt.target.closest('.element').remove();
  }

  _togglelike (evt) {
    evt.target.classList.toggle('element__like-button_active');
  }
}