
class FormValidator {
  constructor(settings, formEl) {
    this._settings = settings,
    this._formEl = formEl,
    this._formSelector = this._settings.formSelector,
    this._inactiveButtonClass = this._settings.inactiveButtonClass,
    this._submitButtonSelector = this._settings.submitButtonSelector,
    this._inputSelector = this._settings.inputSelector,
    this._inputErrorActiveClass = this._settings.inputErrorActiveClass,
    this._inputErrorClass = this._settings.inputErrorClass
  }

  _hasInvalidInput() {
    return this._inputList.some((inputEl) => {
      return !inputEl.validity.valid
      });
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._saveBtn.classList.add(this._inactiveButtonClass);
      this._saveBtn.setAttribute('disabled', true);
    } else {
      this._saveBtn.classList.remove(this._inactiveButtonClass);
      this._saveBtn.removeAttribute('disabled');
    }
  }

  _showInputError(inputEl, errorMessage) {
    this._errorEl = this._formEl.querySelector(`.${inputEl.id}-error`);
    this._errorEl.classList.add(this._inputErrorActiveClass);
    this._errorEl.textContent = errorMessage;
    inputEl.classList.add(this._inputErrorClass);
  }

  _hideInputError(inputEl) {
    this._errorEl = this._formEl.querySelector(`.${inputEl.id}-error`);
    this._errorEl.classList.remove(this._inputErrorActiveClass);
    this._errorEl.textContent = '';
    inputEl.classList.remove(this._inputErrorClass);
  }

  _checkInputValid = (inputEl) => {
    if (!inputEl.validity.valid) {
      this._showInputError(inputEl, inputEl.validationMessage);
    } else {
      this._hideInputError(inputEl);
    }
  };

  resetValidation() {
    this._toggleButtonState();
    this._inputList.forEach((inputEl) => {
      this._hideInputError(inputEl)
    })
  }

  _setEventListeners() {
    this._saveBtn = this._formEl.querySelector(this._submitButtonSelector);
    this._inputList = Array.from(this._formEl.querySelectorAll(this._inputSelector));
    this._hasInvalidInput(this._inputList);
    this._inputList.forEach((inputEl) => {
      inputEl.addEventListener('input', () => {
        this._checkInputValid(inputEl);
        this._toggleButtonState();
      });
    });
  }

  enableValidation() {
    this._setEventListeners();
  }
}


export default FormValidator;
