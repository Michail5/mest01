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

class Card {
   constructor(initialCards){
     this._title = initialCards.title;
     this._image = initialCards.image;  
   }
   _getTemplate() {
    const cardElement = document
      .content
      .querySelector('.popup')
      .cloneNode(true);
    
    return cardElement;
    }

generateCard() {
    this._element = this._getTemplate();
 
   // Добавим данные
   
 this._element.querySelector('.card__image').style.backgroundImage = `url(${this._image})`;
 this._element.querySelector('.card__title').textContent = this._title;
 
   // Вернём элемент наружу
   return this._element;
 } 
 }
 items.forEach((item) => {
    const card = new Card(item.title,  item.image);
    const cardElement = card.generateCard();
  
    // Добавляем в DOM
    document.querySelector('.popup-image__container').append(cardElement);
  });
