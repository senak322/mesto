import Popup from "./Popup.js";


export default class PopupWithImage extends Popup {
  // constructor(selector) {
  //   super(selector)
  // }

  open(el) {
    super.open();
    this.popup.querySelector('.popup__image').src = el.querySelector('.elements__image').src;
    this.popup.querySelector('.popup__image').alt = el.querySelector('.elements__image').alt;
    this.popup.querySelector('.popup__place').textContent = el.querySelector('.elements__title').textContent;
  }

  handleCardClick(el) {
    this.open(el)
  }
}
