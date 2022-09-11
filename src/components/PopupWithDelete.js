import Popup from "./Popup.js";

export default class PopupWithDelete extends Popup {
  constructor(selector) {
    super(selector)

    this._deleteBtn = this.popup.querySelector('.popup__save_type_delete')
  }

  setEventListeners(item) {
    super.setEventListeners();
    this._deleteBtn.addEventListener('click', () =>{
      item.remove();
      item = null;
      super.close();

    })
  }
}
