
import '../pages/index.css';
import { validationSettings, cardSettings } from '../components/data.js';
import Section from '../components/Section.js';
import Card from '../components/Card.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithDelete from '../components/PopupWithDelete.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';

const profileEditBtn = document.querySelector('.profile__edit');
const popupEdit = document.querySelector('.popup_type_edit');
const inputName = document.querySelector('.popup__input_type_name');
const inputJob = document.querySelector('.popup__input_type_job');
const popupFormProfileEdit = popupEdit.querySelector('.popup__form');
const profileAddBtn = document.querySelector('.profile__add');
const popupFormAdd = document.querySelector('.popup__form_type_add');
const popupFormAvatar = document.querySelector('.popup__form_type_avatar');
const profileOvelay = document.querySelector('.profile__foto_type_overlay');



const api = new Api('https://nomoreparties.co', '83d4c574-f43f-43fb-a250-62d63411e3fe');

let myId;
api.getProfileInfo()
  .then(res => { return myId = res._id })
  .catch((err) => { console.log(err) })

// function renderLoading(isLoading) {
//   if (isLoading) {
//     spinner.classList.add('spinner_visible');
//     content.classList.add('content_hidden');
//   } else if (!isLoading) {
//     content.classList.remove('content_hidden');
//     spinner.classList.remove('spinner_visible');
//   }
// }

function handleDelete(obj) {
  api.deleteCard(obj._cardId)
    .then(() => {
      obj.deleteCard();
      this.close()
    })
    .catch((err) => { console.log(err) })
}

function handleElementDelete(obj) {
  popupDelete.open();
  popupDelete.setElem(obj)
};

function handleAddAvatar(value) {
  popupAvatar.saving(true)
  api.setAvatar(value)
    .then(res => {
      userInfo.setAvatar(res);
      popupAvatar.close();
    }).catch((err) => {
      console.log(err);
    }).finally(() => { popupAvatar.saving(false) })
}


const addCard = (values) => {
  const card = new Card(values, '.elements__template', handleCardClick, cardSettings, handleElementDelete, myId, {
    handleLikeCard: () => {
      return api.likeCard(card._cardId)
        .then(res => { card.addLike(res) })
        .catch((err) => { console.log(err) })

    },
    handleUnLikeCard: () => {
      return api.unLikeCard(card._cardId)
        .then(res => { card.deleteLike(res) })
        .catch((err) => { console.log(err) })
    }
  })
  return card.createElements()
}

const renderCardSection = (el) => {
  const cardEl = addCard(el)
  cardSection.addItem(cardEl);
}

const cardSection = new Section({
  renderer: renderCardSection
}, '.elements');

const handleEditSubmit = (values) => {
  popupProfile.saving(true)
  api.editInfo(values)
    .then(res => {
      userInfo.setUserInfo(res)
      popupProfile.close();
    })
    .catch((err) => { console.log(err) })
    .finally(() => { popupProfile.saving(false) })
}

const handleElementAddSubmit = (values) => {
  popupAddPhoto.saving(true)
  api.addCard(values)
    .then(res => {
      const card = addCard(res);
      cardSection.addItem(card);
      popupAddPhoto.close();
    }).catch((err) => { console.log(err) })
    .finally(() => { popupAddPhoto.saving(false) })

};


const popupPhoto = new PopupWithImage('.popup_type_photo');
const popupAddPhoto = new PopupWithForm('.popup_type_add', handleElementAddSubmit);

const userInfo = new UserInfo({ nameSelector: '.profile__name', jobSelector: '.profile__job', imgSelector: '.profile__foto' });

const popupProfile = new PopupWithForm('.popup_type_edit', handleEditSubmit);
const popupDelete = new PopupWithDelete('.popup_type_delete', handleDelete);
const popupAvatar = new PopupWithForm('.popup_type_avatar', handleAddAvatar);


const formValidatorEdit = new FormValidator(validationSettings, popupFormProfileEdit);
const formValidatorAdd = new FormValidator(validationSettings, popupFormAdd);
const formValidatorAvatar = new FormValidator(validationSettings, popupFormAvatar);


const handleCardClick = (name, link) => {
  popupPhoto.open(name, link)
}


profileEditBtn.addEventListener('click', function () {
  popupProfile.open();
  inputName.value = userInfo.getUserInfo().name
  inputJob.value = userInfo.getUserInfo().job
  formValidatorEdit.resetValidation();
});


profileAddBtn.addEventListener('click', () => {
  popupAddPhoto.open();
  formValidatorAdd.resetValidation()
});

profileOvelay.addEventListener('click', () => {
  popupAvatar.open()
  formValidatorAvatar.resetValidation()
})


popupDelete.setEventListeners();
popupProfile.setEventListeners();
popupAddPhoto.setEventListeners();
popupPhoto.setEventListeners();
popupAvatar.setEventListeners();


formValidatorEdit.enableValidation();
formValidatorAdd.enableValidation();
formValidatorAvatar.enableValidation();

Promise.all([api.getImages(), api.getProfileInfo()])
  .then(([data, values]) => {
    cardSection.renderItems(data);
    const newInfo = {
      name: values.name,
      about: values.about,
      avatar: values.avatar
    }
    userInfo.setUserInfo(newInfo)
    userInfo.setAvatar(newInfo)
  })
  .catch((err) => { console.log(err) })
