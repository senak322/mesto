import {initialCards, settings} from './data.js';
import Card from './Card.js';
import FormValidator from './FormValidator.js';

const editBtn = document.querySelector('.profile__edit');
const popupEdit = document.querySelector('.popup_type_edit');

const pofileName = document.querySelector('.profile__name');
const pofileJob = document.querySelector('.profile__job');

const inputName = document.querySelector('.popup__input_type_name');
const inputJob = document.querySelector('.popup__input_type_job');

const popupCloseProfileEdit = popupEdit.querySelector('.popup__close');
const popupFormProfileEdit = popupEdit.querySelector('.popup__form');

const element = document.querySelector('.elements');

const profileAddBtn = document.querySelector('.profile__add');
const popupAdd = document.querySelector('.popup_type_add');
const popupCloseAdd = document.querySelector('.popup__close_type_add');
const popupAddElement = document.querySelector('.popup__save_type_add');
const inputPlace = document.querySelector('.popup__input_type_place');
const inputLink = document.querySelector('.popup__input_type_link');
const popupFormAdd = document.querySelector('.popup__form_type_add');

export const popupPhoto = document.querySelector('.popup_type_photo');
const popupPhotoClose = document.querySelector('.popup__close_type_photo');
export const popupImage = document.querySelector('.popup__image');
export const popupPlace = document.querySelector('.popup__place');

const cardTemplate = document.querySelector('.elements__template')

const popups = document.querySelectorAll('.popup')

const popupsList = Array.from(popups);

const formValidatorEdit = new FormValidator(settings, popupFormProfileEdit);
const formValidatorAdd = new FormValidator(settings, popupFormAdd);

function closePopupEscBtn(evt) {
  if (evt.keyCode === 27) {
    const popupIsOpen = document.querySelector('.popup_is-open');
    formValidatorEdit._hideInputError(inputName);
    formValidatorEdit._hideInputError(inputJob);
    closePopup(popupIsOpen)
  };
}

 export function openPopup(popupElement) {
  popupElement.classList.add('popup_is-open');
  document.addEventListener('keydown', closePopupEscBtn)
}

function closePopup(popupElement) {
  popupElement.classList.remove('popup_is-open');
  document.removeEventListener('keydown', closePopupEscBtn);
}



const addElements = (el) => {
  const card = new Card(el, cardTemplate);
  element.prepend(card.createElements());

}

function savePopup(evt) {
  evt.preventDefault();
  pofileName.textContent = inputName.value;
  pofileJob.textContent = inputJob.value;
  closePopup(popupEdit);
};

const handleElementSubmit = evt => {
  evt.preventDefault();
  const elem = {
    name: inputPlace.value,
    link: inputLink.value
  }
  addElements(elem);
  closePopup(popupAdd);
  popupFormAdd.reset();
};




editBtn.addEventListener('click', function (evt) {
  openPopup(popupEdit);
  formValidatorEdit._disableButton();
  inputName.value = pofileName.textContent;
  inputJob.value = pofileJob.textContent;
  // activeButton(popupEdit, settings)
});


popupCloseProfileEdit.addEventListener('click', function () {
  formValidatorEdit._hideInputError(inputName);
  formValidatorEdit._hideInputError(inputJob);
  closePopup(popupEdit);
})


popupFormProfileEdit.addEventListener('submit', savePopup);

profileAddBtn.addEventListener('click', () => {

  openPopup(popupAdd);
  formValidatorAdd._disableButton()
});

popupCloseAdd.addEventListener('click', () => {
  closePopup(popupAdd);
});


popupFormAdd.addEventListener('submit', handleElementSubmit);

popupPhotoClose.addEventListener('click', () =>
  closePopup(popupPhoto)
)

initialCards.forEach(addElements);

popupsList.forEach((popupEl) => {
  popupEl.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_is-open')) {
      formValidatorEdit._hideInputError(inputName);
      formValidatorEdit._hideInputError(inputJob);
      closePopup(popupEl)
    }
  });
});




formValidatorEdit.enableValidation();
formValidatorAdd.enableValidation();
