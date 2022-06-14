const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
const editBtn = document.querySelector('.profile__edit');
const popupEdit = document.querySelector('.popup_type_edit');

const pofileName = document.querySelector('.profile__name');
const pofileJob = document.querySelector('.profile__job');

const inputName = document.querySelector('.popup__input_type_name');
const inputjob = document.querySelector('.popup__input_type_job');

const popupClose = popupEdit.querySelector('.popup__close');
const popupForm = popupEdit.querySelector('.popup__form');

const elements = document.querySelector('.elements');
const elementsTemplate = elements.querySelector('.elements__template');
const profileAddBtn = document.querySelector('.profile__add');
const popupAdd = document.querySelector('.popup_type_add');
const popupCloseAdd = document.querySelector('.popup__close_type_add');
const popupAddElement = document.querySelector('.popup__save_type_add');
const inputPlace = document.querySelector('.popup__input_type_place');
const inputLink = document.querySelector('.popup__input_type_link');
const popupFormAdd = document.querySelector('.popup__form_type_add');

const popupPhoto = document.querySelector('.popup_type_photo');
const popupPhotoClose = document.querySelector('.popup__close_type_photo');
const popupImage = document.querySelector('.popup__image');
const popupPlace = document.querySelector('.popup__place');

function popupOpener(popupElement) {
  popupElement.classList.add('popup__isopen');
}

const popupPhotoCreate = (el) => {
  popupImage.src = el.link
  popupImage.alt = el.name;
  popupPlace.textContent = el.name;
}


const elementsCreate = (el) => {
  const elementsItem = elementsTemplate.content.cloneNode(true);
  const elementsImage = elementsItem.querySelector('.elements__image');
  elementsImage.src = el.link;
  elementsImage.alt = el.name;
  elementsImage.addEventListener('click', () => {
    popupOpener(popupPhoto);
    popupPhotoCreate(el);
  });
  elementsItem.querySelector('.elements__title').textContent = el.name;
  elementsItem.querySelector('.elements__like').addEventListener('click', function (evt) {
    evt.currentTarget.classList.toggle('elements__like_active');
  });
  elementsItem.querySelector('.elements__delete').addEventListener('click', function (evt) {
    evt.currentTarget.closest('.elements__item').remove();
  });

  return elementsItem;
};


const elementsAdd = (el) => {
  const element = elementsCreate(el);
  elements.prepend(element);
}

initialCards.forEach(elementsAdd);

inputName.value = pofileName.textContent;
inputjob.value = pofileJob.textContent;


editBtn.addEventListener('click', function() {
  popupOpener(popupEdit);
});

function popupCloser(popupElement) {
  popupElement.classList.remove('popup__isopen');
  /*evt.currentTarget.closest('.popup')*/
}

popupClose.addEventListener('click', function() {
  popupCloser(popupEdit);
  inputName.value = pofileName.textContent;
  inputjob.value = pofileJob.textContent;
})

function popupSaver(evt) {
  evt.preventDefault();
  pofileName.textContent = inputName.value;
  pofileJob.textContent = inputjob.value;
  popupCloser(popupEdit);
};

popupForm.addEventListener('submit', popupSaver);

profileAddBtn.addEventListener('click', () => {
  popupOpener(popupAdd);
});

popupCloseAdd.addEventListener('click', () =>  {
  popupCloser(popupAdd);
});

const handleElementSubmit = evt => {
  evt.preventDefault();
  const elem = {
    name: inputPlace.value,
    link: inputLink.value
  }
  initialCards.push(elem);
  elementsAdd(elem);
  popupCloser(popupAdd);
};

popupFormAdd.addEventListener('submit', handleElementSubmit);

popupPhotoClose.addEventListener('click', () =>
  popupCloser(popupPhoto)
)

