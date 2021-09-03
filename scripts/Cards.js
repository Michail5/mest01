const initialCards = [
    {
      title: 'Архыз',
      image: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      title: 'Челябинская область',
      image: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      title: 'Иваново',
      imsge: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      title: 'Камчатка',
      image: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      title: 'Холмогорский район',
      image: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      title: 'Байкал',
      image: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

  const popupImage = document.querySelector('.popup-image');
  const popupImageCloseButton = document.querySelector('.popup-image__close-button');
  const popupImageImage = popupImage.querySelector('.popup-image__image');
  const popupImageCaption = popupImage.querySelector('.popup-image__caption');
  

class Card {
   constructor(initialCards){
     this._title = initialCards.title;
     this._image = initialCards.image;  
   }

_getTemplate() {
    const cardElement = document
      .querySelector('.element-template')
      .content
      .querySelector('.element')
      .cloneNode(true);
    
    return cardElement;
    }

generateCard() {
    this._element = this._getTemplate();
 
   // Добавим данные
   
 this._element.querySelector('.element__image').style.backgroundImage = `url(${this._image})`;
 this._element.querySelector('.element__title').textContent = this._title;

 
   // Вернём элемент наружу
   return this._element;
}
}

items.forEach((item) => {
    const card = new Card(item.title, item.image);
    const cardElement = card.generateCard();
  
    // Добавляем в DOM
    document.querySelector('.').append(cardElement);
  });


  const createElement = card => {
    const element = elementTemplate.querySelector('.element').cloneNode(true);
    const elementImage = element.querySelector('.element__image');
    const elementTitle = element.querySelector('.element__title');
    const removeButton = element.querySelector('.element__remove-button');
    const likeButton = element.querySelector('.element__like-button');
  
    elementTitle.textContent = card.name;
    elementImage.src = card.link;
    elementImage.alt = card.name;
  
    removeButton.addEventListener('click', removeElement);
    likeButton.addEventListener('click', togglelike);
  
    elementImage.addEventListener('click', function() {
      openPopupImage();
  
      popupImageImage.src = card.link;
      popupImageCaption.textContent = card.name;
      popupImageImage.alt = card.name;
    });
  
    return element;
  }
  initialCards.forEach(function(item) {
    elements.append(createElement(item));
  });