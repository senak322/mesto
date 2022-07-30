export default class Popup {
  constructor(selector) {
    this.popup = document.querySelector(selector)
  }

  open() {
    this.popup.classList.add('popup_is-open');
    // this.setEventListeners();
    document.addEventListener('keydown', this._handleEscClose.bind(this));
  }

  close() {
    this.popup.classList.remove('popup_is-open');
    document.removeEventListener('keydown', this._handleEscClose.bind(this));
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      const popupIsOpen = document.querySelector('.popup_is-open');
      this.close(popupIsOpen)
    };
  }

  setEventListeners() {
    this.popup.querySelector('.popup__close').addEventListener('click', this.close.bind(this))
  }
}
