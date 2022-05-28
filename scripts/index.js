let editBtn = document.querySelector('.profile__edit');
let popup = document.querySelector('.popup');

let pofileName = document.querySelector('.profile__name');

let pofileJob = document.querySelector('.profile__job');

let inputName = document.querySelector('.popup__input_type_name');
let inputjob = document.querySelector('.popup__input_type_job');

let popupClose = popup.querySelector('.popup__close');

let popupSave = popup.querySelector('.popup__save');

inputName.value = pofileName.textContent;
inputjob.value = pofileJob.textContent;

function popupOpener(popupElement) {
  popupElement.classList.add('popup__isopen');
}

editBtn.addEventListener('click', function() {
  popupOpener(popup);
});

function popupCloser(popupElement) {
  popupElement.classList.remove('popup__isopen');
}

popupClose.addEventListener('click', function() {
  popupCloser(popup);
  inputName.value = pofileName.textContent;
  inputjob.value = pofileJob.textContent;
})

popupSave.addEventListener('submit', function (event) {
  event.preventDefault();
  pofileName.textContent = inputName.value;
  pofileJob.textContent = inputjob.value;
  popupCloser(popup);
})


