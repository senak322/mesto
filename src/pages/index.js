

import '../pages/index.css';
import { initialCards, validationSettings, cardSettings } from '../components/data.js';
import Section from '../components/Section.js';
import Card from '../components/Card.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import FormValidator from '../components/FormValidator.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';

const profileEditBtn = document.querySelector('.profile__edit');
const popupEdit = document.querySelector('.popup_type_edit');
const inputName = document.querySelector('.popup__input_type_name');
const inputJob = document.querySelector('.popup__input_type_job');
const popupFormProfileEdit = popupEdit.querySelector('.popup__form');
const profileAddBtn = document.querySelector('.profile__add');
const popupFormAdd = document.querySelector('.popup__form_type_add');

const api = new Api('https://nomoreparties.co', '83d4c574-f43f-43fb-a250-62d63411e3fe');

const addCard = (values) => {
  const card = new Card(values, '.elements__template', handleCardClick, cardSettings)
  return card.createElements()
}

const sectionRenderer = (el) => {
  const cardEl = addCard(el)
  createCard.addItem(cardEl);
}


const createCard = new Section({
  renderer: sectionRenderer
}, '.elements');

const handleEditSubmit = (values) => {
  api.editInfo(values)
  userInfo.setUserInfo(values)
  popupProfile.close();
}

const handleElementAddSubmit = (values) => {
  api.addCard(values).then(res => {
    console.log(res);
    const card = addCard(res);
    createCard.addItem(card);

  })
  popupAddPhoto.close();
};

const popupPhoto = new PopupWithImage('.popup_type_photo');

const popupAddPhoto = new PopupWithForm('.popup_type_add', handleElementAddSubmit);
const userInfo = new UserInfo({nameSelector: '.profile__name', jobSelector: '.profile__job', imgSelector: '.profile__foto'});

const popupProfile = new PopupWithForm('.popup_type_edit', handleEditSubmit);

const formValidatorEdit = new FormValidator(validationSettings, popupFormProfileEdit);
const formValidatorAdd = new FormValidator(validationSettings, popupFormAdd);


const handleCardClick = (name, link) => {
  popupPhoto.handleCardClick(name, link)
}

api.getImages().then(data => {
  createCard.renderItems(data);
})


api.getProfileInfo().then(res => {
    const newInfo = {
      name: res.name,
      job: res.about,
      avatar: res.avatar
    }
    userInfo.setUserInfo(newInfo)
    userInfo.setAvatar(newInfo)
})


profileEditBtn.addEventListener('click', function () {
  popupProfile.open();
  api.getProfileInfo().then(data => {return inputName.value = data.name})
  api.getProfileInfo().then(data => {return inputJob.value = data.about})
  formValidatorEdit.resetValidation();
});


profileAddBtn.addEventListener('click', () => {
  popupAddPhoto.open();
  formValidatorAdd.resetValidation()
});



popupProfile.setEventListeners();
popupAddPhoto.setEventListeners();
popupPhoto.setEventListeners();

formValidatorEdit.enableValidation();
formValidatorAdd.enableValidation();
