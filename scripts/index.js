const editBtn = document.querySelector('.profile__edit');
const popupEdit = document.querySelector('.popup_type_edit');

const pofileName = document.querySelector('.profile__name');
const pofileJob = document.querySelector('.profile__job');

const inputName = document.querySelector('.popup__input_type_name');
const inputJob = document.querySelector('.popup__input_type_job');

const popupCloseProfileEdit = popupEdit.querySelector('.popup__close');
const popupFormProfileEdit = popupEdit.querySelector('.popup__form');

const element = document.querySelector('.elements');
const elementsTemplate = element.querySelector('.elements__template');
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

function openPopup(popupElement) {
  popupElement.classList.add('popup_is-open');
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
  elementsImage.addEventListener('click', () => {
    openPopup(popupPhoto);
    createPopupPhoto(el);
  });
  elementsItem.querySelector('.elements__title').textContent = el.name;
  elementsItem.querySelector('.elements__like').addEventListener('click', like);
  elementsItem.querySelector('.elements__delete').addEventListener('click', deleteElem);

  return elementsItem;
};


const addElements = (el) => {
  const elem = createElements(el);
  element.prepend(elem);
}

initialCards.forEach(addElements);

editBtn.addEventListener('click', function() {
  openPopup(popupEdit);
  inputName.value = pofileName.textContent;
  inputJob.value = pofileJob.textContent;
});

function closePopup(popupElement) {
  popupElement.classList.remove('popup_is-open');
}

popupCloseProfileEdit.addEventListener('click', function() {
  closePopup(popupEdit);
})

function savePopup(evt) {
  evt.preventDefault();
  pofileName.textContent = inputName.value;
  pofileJob.textContent = inputJob.value;
  closePopup(popupEdit);
};

popupFormProfileEdit.addEventListener('submit', savePopup);

profileAddBtn.addEventListener('click', () => {
  openPopup(popupAdd);
});

popupCloseAdd.addEventListener('click', () =>  {
  closePopup(popupAdd);
});

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

popupFormAdd.addEventListener('submit', handleElementSubmit);

popupPhotoClose.addEventListener('click', () =>
  closePopup(popupPhoto)
)

