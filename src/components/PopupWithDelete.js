import Popup from "./Popup.js";

export default class PopupWithDelete extends Popup {
  constructor(selector, handleDelete) {
    super(selector)
    this._handleDelete = handleDelete,
    this._deleteBtn = this.popup.querySelector('.popup__save_type_delete')

  }

  setElem(obj) {
    this._obj = obj
  }

  setEventListeners() {
    super.setEventListeners();
    this._deleteBtn.addEventListener('click', () => {
      this._handleDelete(this._obj)
    })
  }
}
