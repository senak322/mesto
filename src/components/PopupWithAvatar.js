import Popup from "./Popup.js";

export default class PopupWithAvatar extends Popup {
  constructor(selector, handleAddAvatar) {
    super(selector)
    this._handleAddAvatar = handleAddAvatar;
    this._form = this.popup.querySelector('.popup__form_type_avatar');
    this._input = this._form.querySelector('.popup__input')
    this._saveBtn = this._form.querySelector('.popup__save')
  }

  saving(isSaving) {
    if (isSaving) {
      this._saveBtn.textContent = 'Сохранение...'
    } else {
      this._saveBtn.textContent = 'Сохранить'
    }
  }

  _getInputValues() {
    this._values = {}
    this._values.link = this._input.value
    return this._values
  }


  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault()
      this._handleAddAvatar(this._getInputValues())
    })
  }

  close() {
    super.close();
    this._form.reset();
  }
}
