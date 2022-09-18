
class Card {
  constructor(el, template, handleCardClick, cardSettings, handleElementDelete, myId, {handleLikeCard, handleUnLikeCard}) {
    this._settings = cardSettings,
    this._elementTemplate = document.querySelector(template),
    this._el = el,
    this._name = el.name,
    this._link = el.link,
    this._likes = el.likes.length,
    this._handleCardClick = handleCardClick,
    this._handleElementDelete = handleElementDelete,
    this._owner = myId,
    this._elOwner = el.owner._id,
    this._cardId = el._id,
    this._handleLikeCard = handleLikeCard,
    this._handleUnLikeCard = handleUnLikeCard

  }

  deleteCard() {
    this._elementsItem.remove();
    this._elementsItem = null;

  }

  addLike(el) {
    this._likeEl.classList.add(this._settings.elementLikeActive)
    this._likesCounter.textContent = el.likes.length
  }

  deleteLike(el) {
    this._likeEl.classList.remove(this._settings.elementLikeActive)
    this._likesCounter.textContent = el.likes.length
  }

  _isHaveMyLike(el) {
    return el.likes.some(el =>
        el._id == this._owner)
  }

  checkLikes(el) {
    if (el.classList.contains(this._settings.elementLikeActive)) {
      this._handleUnLikeCard()
    } else {
      this._handleLikeCard();
    }
  }

  _getTemplateElement() {
    this._elementTemplate = this._elementTemplate.content.querySelector(this._settings.elementsItem).cloneNode(true);
    return this._elementTemplate
  }

  _addEventListeners() {
    this._likeEl = this._elementsItem.querySelector(this._settings.elementLike)
    this._likeEl.addEventListener('click', () => {this.checkLikes(this._likeEl)});
    this._elementsItem.querySelector(this._settings.elementDelete).addEventListener('click', () => {this._handleElementDelete(this)});
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
    this._likesCounter = this._elementsItem.querySelector('.elements__counter')
    this._likesCounter.textContent = this._likes;
    this._isOwner();
    if (this._isHaveMyLike(this._el)) {
      this._elementsItem.querySelector('.elements__like').classList.add(this._settings.elementLikeActive)
    } else {
      this._elementsItem.querySelector('.elements__like').classList.remove(this._settings.elementLikeActive)
    };
    this._addEventListeners();

    return this._elementsItem
  }
}

export default Card;


