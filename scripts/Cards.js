class Card {
  constructor(cardSelector) {
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.card')
      .cloneNode(true);

    return cardElement;
  }

  _handleOpenPopup() {
    popupImage.src = this._image;
    popupElement.classList.add('popup_opened');
  }

  _handleClosePopup() {
    popupImage.src = '';
    popupElement.classList.remove('popup_opened');
  }

  _setEventListeners() {
    this._element.addEventListener('click', () => {
      this._handleOpenPopup();
    });

    popupCloseButton.addEventListener('click', () => {
      this._handleClosePopup();
    });
  }
}

class DefaultCard extends Card {
  constructor(data, cardSelector) {
    super(cardSelector);
    this._title = data.title;
    this._description = data.description;
    this._image = data.image;
    
  }

  generateCard() {
    this._element = super._getTemplate();
    super._setEventListeners();

    this._element.querySelector('.popup__image').style.backgroundImage = `url(${this._image})`;
    this._element.querySelector('.popup__title').textContent = this._title;

    return this._element;
  }
  _handleOpenPopup(){
  popupCaption.textContent = this._description;
  super._handleOpenPopup();
  }
  _handleClosePopup(){
  popupCaption.textContent = '';
super._handleClosePopup();
  }
}

class HorizontalCard extends Card {
  constructor(data, cardSelector) {
    super(cardSelector);
    this._title = data.title;
    this._image = data.image;
  }

  generateCard() {
    this._element = super._getTemplate();
    super._setEventListeners();

    this._element.querySelector('.popup__image').style.backgroundImage = `url(${this._image})`;
    this._element.querySelector('.popup__title').textContent = this._title;

    return this._element;
  }
}

const renderElements = (isGrid) => {
  cardList.innerHTML = '';
  items.forEach((item) => {
    const card = isGrid
      ? new DefaultCard(item, '.default-card')
      : new HorizontalCard(item, '.horizontal-card');

    const cardElement = card.generateCard();
    cardList.append(cardElement);
  });
};

defaultCardButton.addEventListener('click', () => {
  renderElements(true);
});

horizontalCardButton.addEventListener('click', () => {
  renderElements(false);
});

renderElements();
