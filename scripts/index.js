const editBtn = document.querySelector('.profile__edit');
const popup = document.querySelector('.popup');

const pofileName = document.querySelector('.profile__name');

const pofileJob = document.querySelector('.profile__job');

const inputName = document.querySelector('.popup__input_type_name');
const inputjob = document.querySelector('.popup__input_type_job');

const popupClose = popup.querySelector('.popup__close');

const popupSave = popup.querySelector('.popup__save');
const popupForm = popup.querySelector('.popup__form');


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

function popupSaver(event) {
  event.preventDefault();
  pofileName.textContent = inputName.value;
  pofileJob.textContent = inputjob.value;
  popupCloser(popup);
};

popupForm.addEventListener('submit', popupSaver);


