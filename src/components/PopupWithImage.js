import Popup from "./Popup.js";


export default class PopupWithImage extends Popup {
  constructor(selector) {
    super(selector)
    this._popupImage = this.popup.querySelector('.popup__image')
    this._popupPlace = this.popup.querySelector('.popup__place')
  }

  open(name, link) {
    super.open();
    this._popupImage.src = link;
    this._popupImage.alt = name;
    this._popupPlace.textContent = name;
  }

}
