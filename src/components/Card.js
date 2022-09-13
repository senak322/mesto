
class Card {
  constructor(el, template, handleCardClick, cardSettings, handleElementDelete, myId) {
    this._settings = cardSettings,
    this._elementTemplate = document.querySelector(template),
    this._name = el.name,
    this._link = el.link,
    this._likes = el.likes.length,
    this._handleCardClick = handleCardClick,
    this._handleElementDelete = handleElementDelete,
    this._owner = myId,
    this._elOwner = el.owner._id,
    this._cardId = el._id
  }

  _like(evt) {
    evt.currentTarget.classList.toggle(this._settings.elementLikeActive);
  }

  _getTemplateElement() {
    this._elementTemplate = this._elementTemplate.content.querySelector(this._settings.elementsItem).cloneNode(true);
    return this._elementTemplate
  }

  _addEventListeners() {
    this._elementsItem.querySelector(this._settings.elementLike).addEventListener('click', (evt) => {this._like(evt)});
    this._elementsItem.querySelector(this._settings.elementDelete).addEventListener('click', () => {this._handleElementDelete(this._elementsItem, this._cardId)});
    this._elementsImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });
  }

  _isOwner() {
    if (this._owner !== this._elOwner) {
      this._elementsItem.querySelector('.elements__delete').classList.add('elements__delete_type_hidden')
    }
  }

  createElements() {
    this._elementsItem = this._getTemplateElement();
    this._elementsImage = this._elementsItem.querySelector(this._settings.elementImage);
    this._elementsImage.src = this._link;
    this._elementsImage.alt = this._name;
    this._elementsItem.querySelector(this._settings.elementTitle).textContent = this._name;
    this._elementsItem.querySelector('.elements__counter').textContent = this._likes;
    this._isOwner();
    this._addEventListeners();


    return this._elementsItem
  }

}

export default Card;


