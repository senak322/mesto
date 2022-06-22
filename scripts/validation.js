const formList = Array.from(document.querySelectorAll('.popup__form'));

const settings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_type_disabled',
  inputErrorClass: 'popup__input_type_error',
  inputErrorActiveClass: 'popup__error_type_active',
  errorClass: 'popup__error_visible'
};

const hasInvalidInput = inputList => {
return inputList.some((inputEl) => {
  return !inputEl.validity.valid
  });
};

const toggleButtonState = (inputEl, buttonEl, setting) => {
  if (hasInvalidInput(inputEl)) {
    buttonEl.classList.add(setting.inactiveButtonClass);
    buttonEl.setAttribute('disabled', true);
  } else {
    buttonEl.classList.remove(setting.inactiveButtonClass);
    buttonEl.removeAttribute('disabled');
  }
}


const showInputError = (formEl, inputEl, errorMessage, settings) => {
  formEl.classList.add(settings.inputErrorClass);
  const errorEl = document.querySelector(`.${inputEl.id}-error`);
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
    formEl.addEventListener('input', () => {
      checkInputValid(formEl, inputEl);
      toggleButtonState(inputList, saveBtn, settings);
    });
  });

};


const enableValidation = (settings) => {
  formList.forEach((formEl) => {
    setEventListeners(formEl, settings);
  });
};


enableValidation(settings);



