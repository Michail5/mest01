import { Card } from '../components/Card.js';
import { initialCards } from '../components/initialCards.js';
import { FormValidator } from '../components/FormValidator.js';
import { selectors }  from '../components/selectors.js';
//import Sectuion from '../components/Section.js';
//import PopupWithForm from '../components/PopupWithForm.js';
//import PopupWithImage from '../components/PopupWithImage';
//import UserInfo from '../components/UserInfo.js';

import {
  editFormElement,
    nameInput,
    jobInput,
    editButton,
    popupEdit,
    profileTitle,
    profileSubtitle,
    elements,
    popupAdd,
    addButton,
    addFormElement,
    titleInput, 
     linkInput ,
     popupImage,
     popupImageImage, 
     popupImageCaption, 
     popupAddForm,
     popupEditForm ,
     popups, 
} from './utils/constant.js';

const popupWImage = new PopupWithImage(imageInPopup);
popupWImage.setEventListeners();




const createCard = (data) => {
  return new Card(data, '#element-template', onCardClick).generateCard();
}

initialCards.forEach(function (item) {
  elements.append(createCard(item));
});

editFormElement.addEventListener('submit', editFormSubmitHandler);
editButton.addEventListener('click', editProfile);
addFormElement.addEventListener('submit', addFormSubmitHandler);
addButton.addEventListener('click', addElement);

popups.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close-button')) {
      closePopup(popup);
    }
  });
});
const formValidator = new FormValidator(selectors);
formValidator.enableValidation();
