// import  PopupWithDelete  from '../components/PopupWithDelete.js';


class Card {
  constructor(el, template, handleCardClick, cardSettings, handleElementDelete) {
    this._settings = cardSettings,
    this._elementTemplate = document.querySelector(template),
    this._name = el.name,
    this._link = el.link,
    this._likes = el.likes.length,
    this._handleCardClick = handleCardClick,
    this._handleElementDelete = handleElementDelete,
    this._owner = '7f1f5eb28cfd1a3c985ee513',
    this._elOwner = el.owner._id
  }

  _like(evt) {
    evt.currentTarget.classList.toggle(this._settings.elementLikeActive);
  }

  // _deleteElem(item) {
  //   this.item = item
  //   this.item.remove();
  //   this.item = null;
  // }

  _getTemplateElement() {
    this._elementTemplate = this._elementTemplate.content.querySelector(this._settings.elementsItem).cloneNode(true);
    return this._elementTemplate
  }

  _addEventListeners() {
    this._elementsItem.querySelector(this._settings.elementLike).addEventListener('click', (evt) => {this._like(evt)});
    this._elementsItem.querySelector(this._settings.elementDelete).addEventListener('click', () => {this._handleElementDelete(this._elementsItem)});
    this._elementsImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });
  }

  // _isOwner() {
  //   if (this._owner !== this._elOwner) {
  //     this._elementsItem.querySelector('.elements__delete').style.display = 'none';
  //   }
  // }

  createElements() {
    this._elementsItem = this._getTemplateElement();
    this._elementsImage = this._elementsItem.querySelector(this._settings.elementImage);
    this._elementsImage.src = this._link;
    this._elementsImage.alt = this._name;
    this._elementsItem.querySelector(this._settings.elementTitle).textContent = this._name;
    this._elementsItem.querySelector('.elements__counter').textContent = this._likes;
    if (this._owner !== this._elOwner) {
      this._elementsItem.querySelector('.elements__delete').style.display = 'none';
    }
    this._addEventListeners();


    return this._elementsItem
  }

}

export default Card;


