// index.js
import '../pages/index.css';
import {initialCards} from "./cards";
import {createCard, cardDelete, cardLike} from "./card";
import {openModalWindow, closeModalWindow} from "./modal.js";

// @todo: DOM узлы
const placesList = document.querySelector('.places__list');
// Modal windows for profile
const profileEditButton = document.querySelector('.profile__edit-button');
const profileAddButton = document.querySelector('.profile__add-button');
const modalWindowProfileEdit = document.querySelector('.popup_type_edit');
const modalWindowTypeAdd = document.querySelector('.popup_type_new-card');
const modalWindowTypeImage = document.querySelector('.popup_type_image');

const profileFormElement = modalWindowProfileEdit.querySelector('.popup__form');
const cardFormElement = modalWindowTypeAdd.querySelector('.popup__form');

const nameInput = profileFormElement.querySelector('.popup__input_type_name');
const jobInput = profileFormElement.querySelector('.popup__input_type_description');
const currentName = document.querySelector('.profile__title');
const currentJob = document.querySelector('.profile__description');

const placeCardInput =document.querySelector('.popup__input_type_card-name');
const linkCardInput =document.querySelector('.popup__input_type_url');

const imageCard = document.querySelector('.popup__image');
const imageCaption = document.querySelector('.popup__caption');

function handleFormSubmit(evt) {
   evt.preventDefault();
   currentName.textContent = nameInput.value;
   currentJob.textContent = jobInput.value;

   closeModalWindow(modalWindowProfileEdit);
}
function handleFormCard (evt){
   evt.preventDefault();
   const cardData = {
      name: placeCardInput.value,
      link: linkCardInput.value,
   };
   placesList.prepend(createCard(cardData, cardDelete, cardLike, openModalWindowCard));
   closeModalWindow(modalWindowTypeAdd);
   cardFormElement.reset();
}

function openModalWindowCard(evt) {

   openModalWindow(modalWindowTypeImage);
   imageCard.src=evt.link;
   imageCard.alt=evt.name;
   imageCaption.textContent=evt.name;
}

function openModalWindowProfileEdit (item) {
   nameInput.value = currentName.textContent;
   jobInput.value = currentJob.textContent;
   openModalWindow(item);
}

// @todo: Вывести карточки на страницу
initialCards.forEach(function(item)  {
   const placesCards = createCard(item, cardDelete, cardLike, openModalWindowCard);
   placesList.append(placesCards);
});

profileEditButton.addEventListener("click", () => {
   openModalWindowProfileEdit(modalWindowProfileEdit);
});
profileAddButton.addEventListener("click", () => {
   openModalWindow(modalWindowTypeAdd);
});


// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
profileFormElement.addEventListener('submit', handleFormSubmit);
cardFormElement.addEventListener('submit', handleFormCard);