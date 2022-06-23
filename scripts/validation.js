
const hasInvalidInput = inputList => {
return inputList.some((inputEl) => {
  return !inputEl.validity.valid
  });
};

const toggleButtonState = (inputEl, buttonEl, settings) => {
  if (hasInvalidInput(inputEl)) {
    buttonEl.classList.add(settings.inactiveButtonClass);
    buttonEl.setAttribute('disabled', true);
  } else {
    buttonEl.classList.remove(settings.inactiveButtonClass);
    buttonEl.removeAttribute('disabled');
  }
}


const showInputError = (formEl, inputEl, errorMessage, settings) => {
  const errorEl = formEl.querySelector(`.${inputEl.id}-error`);
  errorEl.classList.add(settings.inputErrorActiveClass);
  errorEl.textContent = errorMessage;
  inputEl.classList.add(settings.inputErrorClass);
}



const hideInputError = (formEl, inputEl, settings) => {
  //formEl.classList.remove(settings.inputErrorClass);
  const errorEl = formEl.querySelector(`.${inputEl.id}-error`);
  errorEl.classList.remove(settings.inputErrorActiveClass);
  errorEl.textContent = '';
  inputEl.classList.remove(settings.inputErrorClass);
}

const checkInputValid = (formEl, inputEl) => {
  if (!inputEl.validity.valid) {
    showInputError(formEl, inputEl, inputEl.validationMessage, settings);
  } else {
    hideInputError(formEl, inputEl, settings);
  }
};

const setEventListeners = (formEl, settings) => {
  const saveBtn = formEl.querySelector(settings.submitButtonSelector);
  const inputList = Array.from(formEl.querySelectorAll(settings.inputSelector));
  hasInvalidInput(inputList);
  toggleButtonState(inputList, saveBtn, settings);
  inputList.forEach((inputEl) => {
    hasInvalidInput(inputList);
    inputEl.addEventListener('input', () => {
      checkInputValid(formEl, inputEl);
      toggleButtonState(inputList, saveBtn, settings);
    });
  });

};


const enableValidation = (settings) => {
  const formList = Array.from(document.querySelectorAll('.popup__form'));
  formList.forEach((formEl) => {
    setEventListeners(formEl, settings);
  });
};


const disableButton = (popupEl, settings) => {
  const buttonEl = popupEl.querySelector('.popup__save');
  buttonEl.classList.add(settings.inactiveButtonClass);
  buttonEl.setAttribute('disabled', true);
}

const activeButton = (popupEl, settings) => {
  const buttonEl = popupEl.querySelector('.popup__save');
  buttonEl.classList.remove(settings.inactiveButtonClass);
  buttonEl.removeAttribute('disabled');
}

enableValidation(settings);



