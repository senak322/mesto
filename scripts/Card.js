import { settings } from './data.js';
import { openPopup, popupPhoto, popupImage, popupPlace } from './index.js';

class Card {
  constructor(el, template) {
    this._settings = settings,
    this._elementTemplate = document.querySelector(template),
    this._name = el.name,
    this._link = el.link
  }

  _like(evt) {
    evt.currentTarget.classList.toggle(this._settings.elementLikeActive);
  }

  _deleteElem() {
    // console.log(this._elementsItem);
    this._elementsItem.remove();
    this._elementsItem = null;
  }

  _getTemplateElement() {
    this._elementTemplate = this._elementTemplate.content.querySelector(this._settings.elementsItem).cloneNode(true);
    return this._elementTemplate
  } 

  _openPopupPhoto() {
    popupImage.src = this._link;
    popupImage.alt = this._name;
    popupPlace.textContent = this._name;
  }

  _addEventListeners() {
    this._elementsItem.querySelector(this._settings.elementLike).addEventListener('click', (evt) => {this._like(evt)});
    this._elementsItem.querySelector(this._settings.elementDelete).addEventListener('click', () => {this._deleteElem()});
    this._elementsImage.addEventListener('click', () => {
      openPopup(popupPhoto);
      this._openPopupPhoto();
    });
  }

  createElements() {
    this._elementsItem = this._getTemplateElement();
    this._elementsImage = this._elementsItem.querySelector(this._settings.elementImage);
    this._elementsImage.src = this._link;
    this._elementsImage.alt = this._name;
    this._elementsItem.querySelector(this._settings.elementTitle).textContent = this._name;

    this._addEventListeners();
    return this._elementsItem
  }

}

export default Card;
