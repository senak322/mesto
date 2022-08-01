export default class Popup {
  constructor(selector) {
    this.popup = document.querySelector(selector)
    this._handleEscClose = this._handleEscClose.bind(this)
  }

  open() {
    this.popup.classList.add('popup_is-open');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this.popup.classList.remove('popup_is-open');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      const popupIsOpen = document.querySelector('.popup_is-open');
      this.close(popupIsOpen)
    };
  }

  setEventListeners() {
    this.popup.querySelector('.popup__close').addEventListener('click', this.close.bind(this));
    this.popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_is-open')) {
        this.popup.classList.remove('popup_is-open');
      }
    })
  }
}
