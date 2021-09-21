import { Card } from '../components/Card.js';
import { initialCards } from '../components/initialCards.js';
import { FormValidator } from '../components/FormValidator.js';
import { selectors } from '../components/selectors.js';
import PopupWithImage from '../components/PopupWithImage.js';
// import Section from '../components/Section.js';
// import PopupWithForm from '../components/PopupWithForm.js';
// import UserInfo from '../components/UserInfo.js';

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
  linkInput,
  popupImage,
  popupImageImage,
  popupImageCaption,
  popupAddForm,
  popupEditForm,
  popups,
} from '../utils/constant.js';

const popupWImage = new PopupWithImage(popupImage);
popupWImage.setEventListeners();

// const popupWithDeleteCard = new PopupWithDelete({ popupSelector: deleteCard });
// popupWithDeleteCard.setEventListeners();


const closeByEsc = (evt) => {
  const opennedPopup = document.querySelector('.popup_opened');
  if (evt.key === 'Escape') {
    closePopup(opennedPopup);
  }
}
const openPopup = (popup) => {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEsc);
}
const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEsc);
}
const closePopupEdit = () => {
  closePopup(popupEdit);
}
const editProfile = () => {
  popupEditForm.reset();
  openPopup(popupEdit);
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
}
const editFormSubmitHandler = evt => {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closePopupEdit();

  popupEditForm.reset();
}
const addElement = () => {
  openPopup(popupAdd);
  popupAddForm.reset();
}
const closePopupAdd = () => {
  closePopup(popupAdd);
}
const addFormSubmitHandler = evt => {
  evt.preventDefault();

  elements.prepend(createCard({ link: linkInput.value, name: titleInput.value }));

  popupAddForm.reset();

  closePopupAdd();
}

const onCardClick = (evt) => {
  popupImageImage.src = evt.target.getAttribute("src");
  popupImageCaption.textContent = evt.target.getAttribute("alt");
  popupImageImage.alt = evt.target.getAttribute("alt");

  openPopup(popupImage);
}

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
