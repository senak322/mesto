// import { cardSettings } from './data.js';

class Card {
  constructor(el, template, handleCardClick, cardSettings) {
    this._settings = cardSettings,
    this._elementTemplate = document.querySelector(template),
    this._name = el.place,
    this._link = el.link,
    this._handleCardClick = handleCardClick
  }

  _like(evt) {
    evt.currentTarget.classList.toggle(this._settings.elementLikeActive);
  }

  _deleteElem() {
    this._elementsItem.remove();
    this._elementsItem = null;
  }

  _getTemplateElement() {
    this._elementTemplate = this._elementTemplate.content.querySelector(this._settings.elementsItem).cloneNode(true);
    return this._elementTemplate
  }

  _addEventListeners() {
    this._elementsItem.querySelector(this._settings.elementLike).addEventListener('click', (evt) => {this._like(evt)});
    this._elementsItem.querySelector(this._settings.elementDelete).addEventListener('click', () => {this._deleteElem()});
    this._elementsImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
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


