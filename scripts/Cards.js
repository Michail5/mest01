  
export class Card {
  constructor(vupsen, template) {
    this._vupsen = vupsen;
    this._template = template;
  }



  generateCard() {
    this._getTemplate();
    this._setEventListeners();

    this._elementTitle.textContent = this._vupsen.name;
    this._elementImage.src = this._vupsen.link;
    this._elementImage.alt = this._vupsen.name;

    return this._element;
  }

  _getTemplate() {
    this._element = this._template.querySelector('.element').cloneNode(true);
    this._elementImage = this._element.querySelector('.element__image');
    this._elementTitle = this._element.querySelector('.element__title');
    this._removeButton = this._element.querySelector('.element__remove-button');
    this._likeButton = this._element.querySelector('.element__like-button');
  }

  _setEventListeners() {
    this._removeButton.addEventListener('click', this._removeElement);
    this._likeButton.addEventListener('click', this._togglelike);

    this._elementImage.addEventListener('click', function() {
      openPopupImage();

      popupImageImage.src = this._vupsen.link;
      popupImageCaption.textContent = this._vupsen.name;
      popupImageImage.alt = this._vupsen.name;
    });
  }

  _removeElement = (evt) => {
    evt.target.closest('.element').remove();
  }

  _togglelike = (evt) => {
    evt.target.classList.toggle('element__like-button_active');
  }
};

