import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(selector, submit) {
    super(selector);
    this._submit = submit;
    this._form = this.popup.querySelector('.popup__form');
    this._inputList = this._form.querySelectorAll('.popup__input');
    this._saveBtn = this._form.querySelector('.popup__save');
    this._btnText = this._saveBtn.textContent
  }

  saving(isSaving) {
    if (isSaving) {
      this._saveBtn.textContent = 'Сохранение...'
    } else {
      this._saveBtn.textContent = this._btnText
    }
  }

  _getInputValues() {
    this._inputValues = {};
    this._inputList.forEach(input => {
      this._inputValues[input.name] = input.value
    });
    return this._inputValues
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault()
      this._submit(this._getInputValues())})
  }


  close() {
    super.close();
    this._form.reset();
  }

}
