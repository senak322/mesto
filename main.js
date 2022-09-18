(()=>{"use strict";var e={element:".elements",elementsItem:".elements__item",elementImage:".elements__image",elementTitle:".elements__title",elementLike:".elements__like",elementLikeActive:"elements__like_active",elementDelete:".elements__delete"},t={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__save",inactiveButtonClass:"popup__save_type_disabled",inputErrorClass:"popup__input_type_error",inputErrorActiveClass:"popup__error_type_active",errorClass:"popup__error_visible"};function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.renderer=r,this.container=document.querySelector(n)}var t,r;return t=e,(r=[{key:"renderItems",value:function(e){var t=this;e.reverse().forEach((function(e){t.renderer(e)}))}},{key:"addItem",value:function(e){this.container.prepend(e)}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t,n,r,o,i,s,a){var l=a.handleLikeCard,c=a.handleUnLikeCard;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._settings=o,this._elementTemplate=document.querySelector(n),this._el=t,this._name=t.name,this._link=t.link,this._likes=t.likes.length,this._handleCardClick=r,this._handleElementDelete=i,this._owner=s,this._elOwner=t.owner._id,this._cardId=t._id,this._handleLikeCard=l,this._handleUnLikeCard=c}var t,n;return t=e,(n=[{key:"deleteCard",value:function(){this._elementsItem.remove(),this._elementsItem=null}},{key:"addLike",value:function(e){this._likeEl.classList.add(this._settings.elementLikeActive),this._likesCounter.textContent=e.likes.length}},{key:"deleteLike",value:function(e){this._likeEl.classList.remove(this._settings.elementLikeActive),this._likesCounter.textContent=e.likes.length}},{key:"_isHaveMyLike",value:function(e){var t=this;return e.likes.some((function(e){return e._id==t._owner}))}},{key:"checkLikes",value:function(e){e.classList.contains(this._settings.elementLikeActive)?this._handleUnLikeCard():this._handleLikeCard()}},{key:"_getTemplateElement",value:function(){return this._elementTemplate=this._elementTemplate.content.querySelector(this._settings.elementsItem).cloneNode(!0),this._elementTemplate}},{key:"_addEventListeners",value:function(){var e=this;this._likeEl=this._elementsItem.querySelector(this._settings.elementLike),this._likeEl.addEventListener("click",(function(){e.checkLikes(e._likeEl)})),this._elementsItem.querySelector(this._settings.elementDelete).addEventListener("click",(function(){e._handleElementDelete(e)})),this._elementsImage.addEventListener("click",(function(){e._handleCardClick(e._name,e._link)}))}},{key:"_isOwner",value:function(){this._owner!==this._elOwner&&this._elementsItem.querySelector(".elements__delete").classList.add("elements__delete_type_hidden")}},{key:"createElements",value:function(){return this._elementsItem=this._getTemplateElement(),this._elementsImage=this._elementsItem.querySelector(this._settings.elementImage),this._elementsImage.src=this._link,this._elementsImage.alt=this._name,this._elementsItem.querySelector(this._settings.elementTitle).textContent=this._name,this._likesCounter=this._elementsItem.querySelector(".elements__counter"),this._likesCounter.textContent=this._likes,this._isOwner(),this._isHaveMyLike(this._el)?this._elementsItem.querySelector(".elements__like").classList.add(this._settings.elementLikeActive):this._elementsItem.querySelector(".elements__like").classList.remove(this._settings.elementLikeActive),this._addEventListeners(),this._elementsItem}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();const s=i;function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this.popup.classList.add("popup_is-open"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this.popup.classList.remove("popup_is-open"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this.popup.querySelector(".popup__close").addEventListener("click",this.close.bind(this)),this.popup.addEventListener("mousedown",(function(t){t.target.classList.contains("popup_is-open")&&e.close()}))}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(){return f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=p(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},f.apply(this,arguments)}function p(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=y(e)););return e}function h(e,t){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},h(e,t)}function _(e,t){if(t&&("object"===c(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}var d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(s,e);var t,n,r,o,i=(r=s,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=y(r);if(o){var n=y(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return _(this,e)});function s(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(n=i.call(this,e))._submit=t,n._form=n.popup.querySelector(".popup__form"),n._inputList=n._form.querySelectorAll(".popup__input"),n._saveBtn=n._form.querySelector(".popup__save"),n._btnText=n._saveBtn.textContent,n}return t=s,(n=[{key:"saving",value:function(e){this._saveBtn.textContent=e?"Сохранение...":this._btnText}},{key:"_getInputValues",value:function(){var e=this;return this._inputValues={},this._inputList.forEach((function(t){e._inputValues[t.name]=t.value})),this._inputValues}},{key:"setEventListeners",value:function(){var e=this;f(y(s.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._submit(e._getInputValues())}))}},{key:"close",value:function(){f(y(s.prototype),"close",this).call(this),this._form.reset()}}])&&u(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),s}(l);function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(){return b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=g(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},b.apply(this,arguments)}function g(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=w(e)););return e}function k(e,t){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},k(e,t)}function E(e,t){if(t&&("object"===v(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}var S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&k(e,t)}(s,e);var t,n,r,o,i=(r=s,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=w(r);if(o){var n=w(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return E(this,e)});function s(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(t=i.call(this,e))._popupImage=t.popup.querySelector(".popup__image"),t._popupPlace=t.popup.querySelector(".popup__place"),t}return t=s,(n=[{key:"open",value:function(e,t){b(w(s.prototype),"open",this).call(this),this._popupImage.src=t,this._popupImage.alt=e,this._popupPlace.textContent=e}}])&&m(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),s}(l);function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const L=function(){function e(t,n){var r,o,i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),o=function(e){e.validity.valid?i._hideInputError(e):i._showInputError(e,e.validationMessage)},(r="_checkInputValid")in this?Object.defineProperty(this,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):this[r]=o,this._settings=t,this._formEl=n,this._formSelector=this._settings.formSelector,this._inactiveButtonClass=this._settings.inactiveButtonClass,this._submitButtonSelector=this._settings.submitButtonSelector,this._inputSelector=this._settings.inputSelector,this._inputErrorActiveClass=this._settings.inputErrorActiveClass,this._inputErrorClass=this._settings.inputErrorClass}var t,n;return t=e,(n=[{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._saveBtn.classList.add(this._inactiveButtonClass),this._saveBtn.setAttribute("disabled",!0)):(this._saveBtn.classList.remove(this._inactiveButtonClass),this._saveBtn.removeAttribute("disabled"))}},{key:"_showInputError",value:function(e,t){this._errorEl=this._formEl.querySelector(".".concat(e.id,"-error")),this._errorEl.classList.add(this._inputErrorActiveClass),this._errorEl.textContent=t,e.classList.add(this._inputErrorClass)}},{key:"_hideInputError",value:function(e){this._errorEl=this._formEl.querySelector(".".concat(e.id,"-error")),this._errorEl.classList.remove(this._inputErrorActiveClass),this._errorEl.textContent="",e.classList.remove(this._inputErrorClass)}},{key:"resetValidation",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){e._hideInputError(t)}))}},{key:"_setEventListeners",value:function(){var e=this;this._saveBtn=this._formEl.querySelector(this._submitButtonSelector),this._inputList=Array.from(this._formEl.querySelectorAll(this._inputSelector)),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValid(t),e._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&O(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function C(e){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(e)}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function I(){return I="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=P(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},I.apply(this,arguments)}function P(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=T(e)););return e}function R(e,t){return R=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},R(e,t)}function q(e,t){if(t&&("object"===C(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function T(e){return T=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},T(e)}var A=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&R(e,t)}(s,e);var t,n,r,o,i=(r=s,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=T(r);if(o){var n=T(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return q(this,e)});function s(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(n=i.call(this,e))._handleDelete=t,n._deleteBtn=n.popup.querySelector(".popup__save_type_delete"),n}return t=s,(n=[{key:"setElem",value:function(e){this._obj=e}},{key:"setEventListeners",value:function(){var e=this;I(T(s.prototype),"setEventListeners",this).call(this),this._deleteBtn.addEventListener("click",(function(){e._handleDelete(e._obj)}))}}])&&j(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),s}(l);function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var D=function(){function e(t){var n=t.nameSelector,r=t.jobSelector,o=t.imgSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameSelector=n,this._jobSelector=r,this._imgSelector=o,this._name=document.querySelector(this._nameSelector),this._job=document.querySelector(this._jobSelector),this._avatar=document.querySelector(this._imgSelector)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,job:this._job.textContent}}},{key:"setUserInfo",value:function(e){this._name.textContent=e.name,this._job.textContent=e.about}},{key:"setAvatar",value:function(e){this._avatar.src=e.avatar}}])&&B(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var V=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=t,this._token=n,this._headers={authorization:this._token,"Content-Type":"application/json"}}var t,n;return t=e,(n=[{key:"_getResponseData",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getImages",value:function(){return fetch("".concat(this._url,"/v1/cohort-50/cards"),{headers:this._headers}).then(this._getResponseData)}},{key:"getProfileInfo",value:function(){return fetch("".concat(this._url,"/v1/cohort-50/users/me"),{headers:this._headers}).then(this._getResponseData)}},{key:"editInfo",value:function(e){return fetch("".concat(this._url,"/v1/cohort-50/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.job})}).then(this._getResponseData)}},{key:"addCard",value:function(e){return fetch("".concat(this._url,"/v1/cohort-50/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.place,link:e.link})}).then(this._getResponseData)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._url,"/v1/cohort-50/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._getResponseData)}},{key:"likeCard",value:function(e){return fetch("".concat(this._url,"/v1/cohort-50/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then(this._getResponseData)}},{key:"unLikeCard",value:function(e){return fetch("".concat(this._url,"/v1/cohort-50/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then(this._getResponseData)}},{key:"setAvatar",value:function(e){return fetch("".concat(this._url,"/v1/cohort-50/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then(this._getResponseData)}}])&&x(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function U(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var H,M=document.querySelector(".profile__edit"),N=document.querySelector(".popup_type_edit"),J=document.querySelector(".popup__input_type_name"),z=document.querySelector(".popup__input_type_job"),$=N.querySelector(".popup__form"),F=document.querySelector(".profile__add"),G=document.querySelector(".popup__form_type_add"),K=document.querySelector(".popup__form_type_avatar"),Q=document.querySelector(".profile__foto_type_overlay"),W=new V("https://nomoreparties.co","83d4c574-f43f-43fb-a250-62d63411e3fe");function X(e){oe.open(),oe.setElem(e)}W.getProfileInfo().then((function(e){return H=e._id})).catch((function(e){console.log(e)}));var Y=function(t){var n=new s(t,".elements__template",ce,e,X,H,{handleLikeCard:function(){return W.likeCard(n._cardId).then((function(e){n.addLike(e)})).catch((function(e){console.log(e)}))},handleUnLikeCard:function(){return W.unLikeCard(n._cardId).then((function(e){n.deleteLike(e)})).catch((function(e){console.log(e)}))}});return n.createElements()},Z=new r({renderer:function(e){var t=Y(e);Z.addItem(t)}},".elements"),ee=new S(".popup_type_photo"),te=new d(".popup_type_add",(function(e){te.saving(!0),W.addCard(e).then((function(e){var t=Y(e);Z.addItem(t),te.close()})).catch((function(e){console.log(e)})).finally((function(){te.saving(!1)}))})),ne=new D({nameSelector:".profile__name",jobSelector:".profile__job",imgSelector:".profile__foto"}),re=new d(".popup_type_edit",(function(e){re.saving(!0),W.editInfo(e).then((function(e){ne.setUserInfo(e),re.close()})).catch((function(e){console.log(e)})).finally((function(){re.saving(!1)}))})),oe=new A(".popup_type_delete",(function(e){var t=this;W.deleteCard(e._cardId).then((function(){e.deleteCard(),t.close()})).catch((function(e){console.log(e)}))})),ie=new d(".popup_type_avatar",(function(e){ie.saving(!0),W.setAvatar(e).then((function(e){ne.setAvatar(e),ie.close()})).catch((function(e){console.log(e)})).finally((function(){ie.saving(!1)}))})),se=new L(t,$),ae=new L(t,G),le=new L(t,K),ce=function(e,t){ee.open(e,t)};M.addEventListener("click",(function(){re.open(),J.value=ne.getUserInfo().name,z.value=ne.getUserInfo().job,se.resetValidation()})),F.addEventListener("click",(function(){te.open(),ae.resetValidation()})),Q.addEventListener("click",(function(){ie.open(),le.resetValidation()})),oe.setEventListeners(),re.setEventListeners(),te.setEventListeners(),ee.setEventListeners(),ie.setEventListeners(),se.enableValidation(),ae.enableValidation(),le.enableValidation(),Promise.all([W.getImages(),W.getProfileInfo()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],s=!0,a=!1;try{for(n=n.call(e);!(s=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);s=!0);}catch(e){a=!0,o=e}finally{try{s||null==n.return||n.return()}finally{if(a)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return U(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?U(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];Z.renderItems(o);var s={name:i.name,about:i.about,avatar:i.avatar};ne.setUserInfo(s),ne.setAvatar(s)})).catch((function(e){console.log(e)}))})();