
class Card {
  constructor(el, template, handleCardClick, cardSettings, handleElementDelete, myId, handleLikeCard, handleUnLikeCard) {
    this._settings = cardSettings,
    this._elementTemplate = document.querySelector(template),
    this._el = el,
    this._name = el.name,
    this._link = el.link,
    this._likes = el.likes.length,
    this._likesArr = el.likes,
    this._handleCardClick = handleCardClick,
    this._handleElementDelete = handleElementDelete,
    this._owner = myId,
    this._elOwner = el.owner._id,
    this._cardId = el._id,
    this._handleLikeCard = handleLikeCard,
    this._handleUnLikeCard = handleUnLikeCard
  }

  _isHaveMyLike() { //тут нужна проверка от api иначе проверяется только после обновы или создания карточки
    return this._likesArr.some(el =>
      el._id == this._owner
    )
  }

  _checkLikes(evt) {
    // evt.currentTarget.classList.toggle(this._settings.elementLikeActive);
    // this._likesArr.forEach(el => {
    //   if (el._id === this._owner) {
    //     this._handleUnLikeCard(this._cardId, elementsItem)
    //     evt.currentTarget.classList.remove(this._settings.elementLikeActive)
    //   } else {
    //     this._handleLikeCard(this._cardId, elementsItem);
    //     evt.currentTarget.classList.add(this._settings.elementLikeActive)
    //   }
    // })
    if (this._isHaveMyLike()) {
      this._handleUnLikeCard(this._cardId, this._elementsItem)
      evt.currentTarget.classList.remove(this._settings.elementLikeActive)
    } else {
      this._handleLikeCard(this._cardId, this._elementsItem);
      evt.currentTarget.classList.add(this._settings.elementLikeActive)
    }
  }

  // _like(evt) {
  //   evt.currentTarget.classList.toggle(this._settings.elementLikeActive);
  //   this._handleLikeCard(this._cardId, this._elementsItem);
  //   if (this._likesArr.includes(this._el.this._owner)) {
  //     this._handleUnLikeCard(this._cardId, this._elementsItem);
  //   }
  // }

  _getTemplateElement() {
    this._elementTemplate = this._elementTemplate.content.querySelector(this._settings.elementsItem).cloneNode(true);
    return this._elementTemplate
  }

  _addEventListeners() {
    this._elementsItem.querySelector(this._settings.elementLike).addEventListener('click', (evt) => {this._checkLikes(evt)});
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
    if (this._isHaveMyLike()) {
      this._elementsItem.querySelector('.elements__like').classList.add(this._settings.elementLikeActive)
    } else {
      this._elementsItem.querySelector('.elements__like').classList.remove(this._settings.elementLikeActive)
    };

    this._addEventListeners();


    return this._elementsItem
  }

}

export default Card;


