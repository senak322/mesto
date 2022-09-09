// const res = fetch('https://nomoreparties.co/v1/cohort-50/users/me', {
//   headers: {
//     authorization: '83d4c574-f43f-43fb-a250-62d63411e3fe'
//   }
// })
//   .then(res => res.json())
//   // .then((result) => {
//   //   console.log(result.name);
//   // });

// console.log(res);


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

const popupPhoto = new PopupWithImage('.popup_type_photo');
const popupProfile = new PopupWithForm('.popup_type_edit', handleEditSubmit);
const popupAddPhoto = new PopupWithForm('.popup_type_add', handleElementAddSubmit);
const userInfo = new UserInfo({nameSelector: '.profile__name', jobSelector: '.profile__job', imgSelector: '.profile__foto'});
const api = new Api('https://nomoreparties.co', '83d4c574-f43f-43fb-a250-62d63411e3fe');

const formValidatorEdit = new FormValidator(validationSettings, popupFormProfileEdit);
const formValidatorAdd = new FormValidator(validationSettings, popupFormAdd);


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

console.log(api.getImages());


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


const setNewInfo = () => {
  return api.getProfileInfo().then(res => {
    const newInfo = {
      name: res.name,
      job: res.about,
      avatar: res.avatar
    }
    userInfo.setUserInfo(newInfo)
})}

setNewInfo()


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


createCard.renderItems();
popupProfile.setEventListeners();
popupAddPhoto.setEventListeners();
popupPhoto.setEventListeners();

formValidatorEdit.enableValidation();
formValidatorAdd.enableValidation();
