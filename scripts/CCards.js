   const initialCards  = [
    {
        image: 'https://code.s3.yandex.net/web-code/oop/card_detail.jpg',
        title: 'BIOLOID',
    
    },
    {
        image: 'https://code.s3.yandex.net/web-code/oop/card_detail.jpg',
        title: 'BIOLOID Premium kit',
    }, 
    {
        image: 'https://code.s3.yandex.net/web-code/oop/card_detail2.png',
        title: 'Airwheel',
        
    },
];



const popupImage = document.querySelector('.popup-image');
const popupImageCloseButton = document.querySelector('.popup-image__close-button');
const popupImageImage = popupImage.querySelector('.popup-image__image');
const popupImageCaption = popupImage.querySelector('.popup-image__caption');
const popups = document.querySelectorAll('.popup');

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
        
    }

    generateCard() {
        this._element = super._getTemplate();
        super._setEventListeners();

        this._element.querySelector('.card__image').style.backgroundImage = `url(${this._image})`;//ИЛИ ТУТ нужен popup_image и popup_title
        this._element.querySelector('.card__title').textContent = this._title;

        return this._element;
    }
    _handleOpenPopup() {
        popupCaption.textContent = this._description;
        super._handleOpenPopup();
    }
    _handleClosePopup() {
        popupCaption.textContent = '';
        super._handleClosePopup();
    }
}

class HorizontalCard extends Card {
    constructor(data, cardSelector) {
        super(cardSelector);
        this._title = data.title;
    }

    generateCard() {
        this._element = super._getTemplate();
        super._setEventListeners();

        this._element.querySelector('.card__image').style.backgroundImage = `url(${this._image})`;
        this._element.querySelector('.card__title').textContent = this._title;
        

        return this._element;
    }
}


defaultCardButton.addEventListener('click', () => {
    renderElements(true);
});

horizontalCardButton.addEventListener('click', () => {
    renderElements(false);
});

renderElements();
