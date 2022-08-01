import '../pages/index.css';
import { initialCards, validationSettings, cardSettings } from '../components/data.js';
import Section from '../components/Section.js';
import Card from '../components/Card.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import FormValidator from '../components/FormValidator.js';
import UserInfo from '../components/UserInfo.js';

const profileEditBtn = document.querySelector('.profile__edit');
const popupEdit = document.querySelector('.popup_type_edit');
const inputName = document.querySelector('.popup__input_type_name');
const inputJob = document.querySelector('.popup__input_type_job');
const popupCloseProfileEdit = popupEdit.querySelector('.popup__close');
const popupFormProfileEdit = popupEdit.querySelector('.popup__form');
const profileAddBtn = document.querySelector('.profile__add');
const popupCloseAdd = document.querySelector('.popup__close_type_add');
const popupFormAdd = document.querySelector('.popup__form_type_add');


const handleCardClick = (name, link) => {
  popupPhoto.handleCardClick(name, link)
}

const addCard = (values) => {
  const card = new Card(values, '.elements__template', handleCardClick, cardSettings)
  return card.createElements()
}

const sectionRenderer = (el) => {
  const cardEl = addCard(el)
  createCard.addItem(cardEl);
}

const createCard = new Section({
  items: initialCards,
  renderer: sectionRenderer
}, '.elements');

const handleElementAddSubmit = (values) => {
  const card = addCard(values);
  createCard.addItem(card);
  popupAddPhoto.close();
};

const handleEditSubmit = (values) => {
  userInfo.setUserInfo(values)
  popupProfile.close();
}

const popupPhoto = new PopupWithImage('.popup_type_photo');
const popupProfile = new PopupWithForm('.popup_type_edit', handleEditSubmit);
const popupAddPhoto = new PopupWithForm('.popup_type_add', handleElementAddSubmit);
const userInfo = new UserInfo({nameSelector: '.profile__name', jobSelector: '.profile__job'});


const formValidatorEdit = new FormValidator(validationSettings, popupFormProfileEdit);
const formValidatorAdd = new FormValidator(validationSettings, popupFormAdd);


profileEditBtn.addEventListener('click', function () {
  popupProfile.open();
  inputName.value = userInfo.getUserInfo().name;
  inputJob.value = userInfo.getUserInfo().job;
  formValidatorEdit.resetValidation();
});



profileAddBtn.addEventListener('click', () => {
  popupAddPhoto.open();
  formValidatorAdd.resetValidation()
});

popupCloseAdd.addEventListener('click', () => {
  popupAddPhoto.close();
});


createCard.renderItems();
popupProfile.setEventListeners();
popupAddPhoto.setEventListeners();
popupPhoto.setEventListeners();

formValidatorEdit.enableValidation();
formValidatorAdd.enableValidation();
