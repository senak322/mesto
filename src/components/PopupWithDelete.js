import Popup from "./Popup.js";

export default class PopupWithDelete extends Popup {
  constructor(selector, handleDelete) {
    super(selector)
    this._handleDelete = handleDelete,
    this._deleteBtn = this.popup.querySelector('.popup__save_type_delete')

  }

  setElem(item, cardId) {
    this._cardId = cardId;
    this._item = item
  }

  setEventListeners() {
    super.setEventListeners();
    this._deleteBtn.addEventListener('click', () => {
      this._handleDelete(this._item, this._cardId)
    })
  }
}
