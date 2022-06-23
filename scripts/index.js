const editBtn = document.querySelector('.profile__edit');
const popupEdit = document.querySelector('.popup_type_edit');

const pofileName = document.querySelector('.profile__name');
const pofileJob = document.querySelector('.profile__job');

const inputName = document.querySelector('.popup__input_type_name');
const inputJob = document.querySelector('.popup__input_type_job');

const popupCloseProfileEdit = popupEdit.querySelector('.popup__close');
const popupFormProfileEdit = popupEdit.querySelector('.popup__form');

const element = document.querySelector('.elements');
const elementsTemplate = document.querySelector('.elements__template');
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

const popups = document.querySelectorAll('.popup')
const formList = Array.from(document.querySelectorAll('.popup__form'));
const popupsList = Array.from(popups);


function closePopupEscBtn(evt) {
  if (evt.keyCode === 27) {
    const popupIsOpen = document.querySelector('.popup_is-open');
    closePopup(popupIsOpen)
  };
}

function openPopup(popupElement) {
  popupElement.classList.add('popup_is-open');
  document.addEventListener('keydown', closePopupEscBtn)
}

function closePopup(popupElement) {
  popupElement.classList.remove('popup_is-open');
  document.removeEventListener('keydown', closePopupEscBtn);
}

const createPopupPhoto = (el) => {
  popupImage.src = el.link
  popupImage.alt = el.name;
  popupPlace.textContent = el.name;
}

const like = (evt) => evt.currentTarget.classList.toggle('elements__like_active');
const deleteElem = (evt) => evt.currentTarget.closest('.elements__item').remove();

const createElements = (el) => {
  const elementsItem = elementsTemplate.content.cloneNode(true);
  const elementsImage = elementsItem.querySelector('.elements__image');
  elementsImage.src = el.link;
  elementsImage.alt = el.name;
  elementsItem.querySelector('.elements__title').textContent = el.name;
  elementsItem.querySelector('.elements__like').addEventListener('click', like);
  elementsItem.querySelector('.elements__delete').addEventListener('click', deleteElem);
  elementsImage.addEventListener('click', () => {
    openPopup(popupPhoto);
    createPopupPhoto(el);
  });
  return elementsItem;
};


const addElements = (el) => {
  const elem = createElements(el);
  element.prepend(elem);
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
  /*initialCards.push(elem);*/
  addElements(elem);
  closePopup(popupAdd);
  popupFormAdd.reset();
};


editBtn.addEventListener('click', function (evt) {
  openPopup(popupEdit);
  inputName.value = pofileName.textContent;
  inputJob.value = pofileJob.textContent;
  activeButton(popupEdit, settings)
});


popupCloseProfileEdit.addEventListener('click', function () {
  closePopup(popupEdit);
})


popupFormProfileEdit.addEventListener('submit', savePopup);

profileAddBtn.addEventListener('click', () => {
  openPopup(popupAdd);
  disableButton(popupAdd, settings);
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
      closePopup(popupEl)
    }
  });
});


