import {initialCards, validationSettings} from './data.js';
import Section from './Section.js';
import Card from './Card.js';
import PopupWithForm from './PopupWithForm.js';
import PopupWithImage from './PopupWithImage.js';
import FormValidator from './FormValidator.js';

const profileEditBtn = document.querySelector('.profile__edit');
const popupEdit = document.querySelector('.popup_type_edit');

const pofileName = document.querySelector('.profile__name');
const pofileJob = document.querySelector('.profile__job');

const inputName = document.querySelector('.popup__input_type_name');
const inputJob = document.querySelector('.popup__input_type_job');

const popupCloseProfileEdit = popupEdit.querySelector('.popup__close');
const popupFormProfileEdit = popupEdit.querySelector('.popup__form');

const element = document.querySelector('.elements');

const profileAddBtn = document.querySelector('.profile__add');

const popupCloseAdd = document.querySelector('.popup__close_type_add');

const popupFormAdd = document.querySelector('.popup__form_type_add');


const popups = document.querySelectorAll('.popup')

const popupsList = Array.from(popups);

export const popupPhoto = new PopupWithImage('.popup_type_photo');

const addCard = (values) => {
  const card = new Card(values, '.elements__template')
  return card.createElements()
}

const createCard = new Section({
  items: initialCards,
  renderer: (el) => {
    const card = new Card(el, '.elements__template');
    const cardEl = card.createElements();
    createCard.addItem(cardEl);
}}, '.elements');

  const handleElementAddSubmit = (values) => {
     const card = addCard(values);
      createCard.addItem(card);
      popupAddPhoto.close();
  };

  const handleEditSubmit = (values) => {
    pofileName.textContent = values.name;
    pofileJob.textContent = values.job;
    popupProfile.close();
  }

const popupProfile = new PopupWithForm('.popup_type_edit', handleEditSubmit);


const popupAddPhoto = new PopupWithForm('.popup_type_add', handleElementAddSubmit);




const formValidatorEdit = new FormValidator(validationSettings, popupFormProfileEdit);
const formValidatorAdd = new FormValidator(validationSettings, popupFormAdd);



profileEditBtn.addEventListener('click', function (evt) {
  popupProfile.open();
  inputName.value = pofileName.textContent;
  inputJob.value = pofileJob.textContent;
  formValidatorEdit.resetValidation();
});

popupCloseProfileEdit.addEventListener('click', function () {
  popupProfile.close();
})


profileAddBtn.addEventListener('click', () => {
  popupAddPhoto.open();
  formValidatorAdd.resetValidation()
});

popupCloseAdd.addEventListener('click', () => {
  popupAddPhoto.close();
});


popupsList.forEach((popupEl) => {
  popupEl.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_is-open')) {
      popupEl.classList.remove('popup_is-open');
    }
  });
});

createCard.renderItems();


formValidatorEdit.enableValidation();
formValidatorAdd.enableValidation();
