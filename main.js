(()=>{"use strict";var e={element:".elements",elementsItem:".elements__item",elementImage:".elements__image",elementTitle:".elements__title",elementLike:".elements__like",elementLikeActive:"elements__like_active",elementDelete:".elements__delete"},t={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__save",inactiveButtonClass:"popup__save_type_disabled",inputErrorClass:"popup__input_type_error",inputErrorActiveClass:"popup__error_type_active",errorClass:"popup__error_visible"};function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.renderedItems=r,this.renderer=o,this.container=document.querySelector(n)}var t,r;return t=e,(r=[{key:"renderItems",value:function(){var e=this;this.renderedItems.forEach((function(t){e.renderer(t)}))}},{key:"addItem",value:function(e){this.container.prepend(e)}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t,n,r,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._settings=o,this._elementTemplate=document.querySelector(n),this._name=t.place,this._link=t.link,this._handleCardClick=r}var t,n;return t=e,(n=[{key:"_like",value:function(e){e.currentTarget.classList.toggle(this._settings.elementLikeActive)}},{key:"_deleteElem",value:function(){this._elementsItem.remove(),this._elementsItem=null}},{key:"_getTemplateElement",value:function(){return this._elementTemplate=this._elementTemplate.content.querySelector(this._settings.elementsItem).cloneNode(!0),this._elementTemplate}},{key:"_addEventListeners",value:function(){var e=this;this._elementsItem.querySelector(this._settings.elementLike).addEventListener("click",(function(t){e._like(t)})),this._elementsItem.querySelector(this._settings.elementDelete).addEventListener("click",(function(){e._deleteElem()})),this._elementsImage.addEventListener("click",(function(){e._handleCardClick(e._name,e._link)}))}},{key:"createElements",value:function(){return this._elementsItem=this._getTemplateElement(),this._elementsImage=this._elementsItem.querySelector(this._settings.elementImage),this._elementsImage.src=this._link,this._elementsImage.alt=this._name,this._elementsItem.querySelector(this._settings.elementTitle).textContent=this._name,this._addEventListeners(),this._elementsItem}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();const s=i;function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this.popup.classList.add("popup_is-open"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this.popup.classList.remove("popup_is-open"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){if("Escape"===e.key){var t=document.querySelector(".popup_is-open");this.close(t)}}},{key:"setEventListeners",value:function(){var e=this;this.popup.querySelector(".popup__close").addEventListener("click",this.close.bind(this)),this.popup.addEventListener("mousedown",(function(t){t.target.classList.contains("popup_is-open")&&e.close()}))}}])&&l(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(){return p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=f(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},p.apply(this,arguments)}function f(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=y(e)););return e}function _(e,t){return _=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},_(e,t)}function h(e,t){if(t&&("object"===c(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}var d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_(e,t)}(s,e);var t,n,r,o,i=(r=s,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=y(r);if(o){var n=y(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return h(this,e)});function s(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(n=i.call(this,e))._submit=t,n._form=n.popup.querySelector(".popup__form"),n._inputList=n._form.querySelectorAll(".popup__input"),n}return t=s,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputValues={},this._inputList.forEach((function(t){e._inputValues[t.name]=t.value})),this._inputValues}},{key:"setEventListeners",value:function(){var e=this;p(y(s.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._submit(e._getInputValues())}))}},{key:"close",value:function(){p(y(s.prototype),"close",this).call(this),this._form.reset()}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),s}(u);function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(){return b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=g(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},b.apply(this,arguments)}function g(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=S(e)););return e}function E(e,t){return E=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},E(e,t)}function k(e,t){if(t&&("object"===m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function S(e){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},S(e)}var w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&E(e,t)}(s,e);var t,n,r,o,i=(r=s,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=S(r);if(o){var n=S(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return k(this,e)});function s(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(t=i.call(this,e))._popupImage=t.popup.querySelector(".popup__image"),t._popupPlace=t.popup.querySelector(".popup__place"),t}return t=s,(n=[{key:"open",value:function(e,t){b(S(s.prototype),"open",this).call(this),this._popupImage.src=t,this._popupImage.alt=e,this._popupPlace.textContent=e}},{key:"handleCardClick",value:function(e,t){this.open(e,t)}}])&&v(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),s}(u);function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const O=function(){function e(t,n){var r,o,i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),o=function(e){e.validity.valid?i._hideInputError(e):i._showInputError(e,e.validationMessage)},(r="_checkInputValid")in this?Object.defineProperty(this,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):this[r]=o,this._settings=t,this._formEl=n,this._formSelector=this._settings.formSelector,this._inactiveButtonClass=this._settings.inactiveButtonClass,this._submitButtonSelector=this._settings.submitButtonSelector,this._inputSelector=this._settings.inputSelector,this._inputErrorActiveClass=this._settings.inputErrorActiveClass,this._inputErrorClass=this._settings.inputErrorClass}var t,n;return t=e,(n=[{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._saveBtn.classList.add(this._inactiveButtonClass),this._saveBtn.setAttribute("disabled",!0)):(this._saveBtn.classList.remove(this._inactiveButtonClass),this._saveBtn.removeAttribute("disabled"))}},{key:"_showInputError",value:function(e,t){this._errorEl=this._formEl.querySelector(".".concat(e.id,"-error")),this._errorEl.classList.add(this._inputErrorActiveClass),this._errorEl.textContent=t,e.classList.add(this._inputErrorClass)}},{key:"_hideInputError",value:function(e){this._errorEl=this._formEl.querySelector(".".concat(e.id,"-error")),this._errorEl.classList.remove(this._inputErrorActiveClass),this._errorEl.textContent="",e.classList.remove(this._inputErrorClass)}},{key:"resetValidation",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){e._hideInputError(t)}))}},{key:"_setEventListeners",value:function(){var e=this;this._saveBtn=this._formEl.querySelector(this._submitButtonSelector),this._inputList=Array.from(this._formEl.querySelectorAll(this._inputSelector)),this._hasInvalidInput(this._inputList),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValid(t),e._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&j(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var C=function(){function e(t){var n=t.nameSelector,r=t.jobSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameSelector=n,this._jobSelector=r,this._name=document.querySelector(this._nameSelector),this._job=document.querySelector(this._jobSelector)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,job:this._job.textContent}}},{key:"setUserInfo",value:function(e){this._name.textContent=e.name,this._job.textContent=e.job}}])&&I(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),L=document.querySelector(".profile__edit"),P=document.querySelector(".popup_type_edit"),q=document.querySelector(".popup__input_type_name"),B=document.querySelector(".popup__input_type_job"),T=(P.querySelector(".popup__close"),P.querySelector(".popup__form")),x=document.querySelector(".profile__add"),R=(document.querySelector(".popup__close_type_add"),document.querySelector(".popup__form_type_add")),V=function(e,t){U.handleCardClick(e,t)},A=function(t){return new s(t,".elements__template",V,e).createElements()},D=new r({items:[{place:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{place:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{place:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{place:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{place:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{place:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:function(e){var t=A(e);D.addItem(t)}},".elements"),U=new w(".popup_type_photo"),z=new d(".popup_type_edit",(function(e){N.setUserInfo(e),z.close()})),M=new d(".popup_type_add",(function(e){var t=A(e);D.addItem(t),M.close()})),N=new C({nameSelector:".profile__name",jobSelector:".profile__job"}),F=new O(t,T),G=new O(t,R);L.addEventListener("click",(function(){z.open(),q.value=N.getUserInfo().name,B.value=N.getUserInfo().job,F.resetValidation()})),x.addEventListener("click",(function(){M.open(),G.resetValidation()})),D.renderItems(),z.setEventListeners(),M.setEventListeners(),U.setEventListeners(),F.enableValidation(),G.enableValidation()})();