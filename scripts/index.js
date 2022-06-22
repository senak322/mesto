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



//const editSaveBtn = document.querySelector('.popup__save');
//const inputList = Array.from(document.querySelectorAll('.popup__input'));
const formList = Array.from(document.querySelectorAll('.popup__form'))

const hasInvalidInput = inputList => {
return inputList.some((inputEl) => {
  return !inputEl.validity.valid
  });
};

const toggleButtonState = (inputEl, buttonEl) => {
  if (hasInvalidInput(inputEl)) {
    buttonEl.classList.add('popup__save_type_disabled');
    buttonEl.setAttribute('disabled', true);
  } else {
    buttonEl.classList.remove('popup__save_type_disabled');
    buttonEl.removeAttribute('disabled');
  }
}

// const isButtonActive = () => {
//   if
// }

const showInputError = (formEl, inputEl, errorMessage) => {
  formEl.classList.add('popup__input_type_error');
  const errorEl = document.querySelector(`.${inputEl.id}-error`);
  errorEl.classList.add('popup__error_type_active');
  errorEl.textContent = errorMessage;
  inputEl.classList.add('popup__input_type_error')
}

const hideInputError = (formEl, inputEl) => {
  formEl.classList.remove('popup__input_type_error');
  const errorEl = document.querySelector(`.${inputEl.id}-error`);
  errorEl.classList.remove('popup__error_type_active');
  errorEl.textContent = '';
  inputEl.classList.remove('popup__input_type_error');
}

const checkInputValid = (formEl, inputEl) => {
  if (!inputEl.validity.valid) {
    showInputError(formEl, inputEl, inputEl.validationMessage);
  } else {
    hideInputError(formEl, inputEl);
  }
};

const setEventListeners = (formEl) => {
  const saveBtn = formEl.querySelector('.popup__save');
  const inputList = Array.from(formEl.querySelectorAll('.popup__input'));
  hasInvalidInput(inputList);
  toggleButtonState(inputList, saveBtn);
  inputList.forEach((inputEl) => {
    hasInvalidInput(inputList);
    formEl.addEventListener('input', () => {
      checkInputValid(formEl, inputEl);
      toggleButtonState(inputList, saveBtn);
    });
  });

};


// editSaveBtn.addEventListener('submit', (evt) => {
//   evt.preventDefault();
// })

const enableValidation =  /*({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_type_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}) */ () => {
  formList.forEach((formEl) => {
    setEventListeners(formEl);
  });
};


enableValidation();













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
  enableValidation();
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

