// index.js
import '../pages/index.css';
import {initialCards} from './cards';
import {createCard, deleteCard, likeCard} from './card';
import {openModalWindow, closeModalWindow} from './modal.js';
import {getParameters} from "./card";

// @todo: DOM узлы
const placesList = document.querySelector('.places__list');
// Modal windows for profile
const profileEditButton = document.querySelector('.profile__edit-button');
const profileAddButton = document.querySelector('.profile__add-button');
const modalWindowProfileEdit = document.querySelector('.popup_type_edit');
const modalWindowTypeAdd = document.querySelector('.popup_type_new-card');
const modalWindowTypeImage = document.querySelector('.popup_type_image');

const profileFormElement = document.forms['edit-profile'];
const cardFormElement = document.forms['new-place'];

const nameInput = profileFormElement.querySelector('.popup__input_type_name');
const jobInput = profileFormElement.querySelector('.popup__input_type_description');
const currentName = document.querySelector('.profile__title');
const currentJob = document.querySelector('.profile__description');

const placeCardInput =document.querySelector('.popup__input_type_card-name');
const linkCardInput =document.querySelector('.popup__input_type_url');

const imageCard = document.querySelector('.popup__image');
const imageCaption = document.querySelector('.popup__caption');

const popups = document.querySelectorAll('.popup');
popups.forEach(function(item) {
   item.classList.add('popup_is-animated');
});

function handleProfileFormSubmit(evt) {
   evt.preventDefault();
   currentName.textContent = nameInput.value;
   currentJob.textContent = jobInput.value;

   closeModalWindow(modalWindowProfileEdit);
}
function handleFormCardSubmit (evt){
   evt.preventDefault();
   const cardData = {
      name: placeCardInput.value,
      link: linkCardInput.value,
   };
   placesList.prepend(createCard(cardData, deleteCard, likeCard, openModalWindowCard));
   closeModalWindow(modalWindowTypeAdd);
   cardFormElement.reset();
}

function openModalWindowCard(card) {

   openModalWindow(modalWindowTypeImage);
   imageCard.src = card.link;
   imageCard.alt = card.name;
   imageCaption.textContent = card.name;
}

function openModalWindowProfileEdit (item) {

   nameInput.value = currentName.textContent;
   jobInput.value = currentJob.textContent;
   openModalWindow(item);
}

// @todo: Вывести карточки на страницу
initialCards.forEach(function(item)  {
   const placesCards = createCard(item, deleteCard, likeCard, openModalWindowCard);
   placesList.append(placesCards);
});

profileEditButton.addEventListener('click', () => {
   openModalWindowProfileEdit(modalWindowProfileEdit);
});
profileAddButton.addEventListener('click', () => {
   openModalWindow(modalWindowTypeAdd);
});

// Прикрепляем обработчик к форме: он будет следить за событием “submit” - «отправка»
profileFormElement.addEventListener('submit', handleProfileFormSubmit);
cardFormElement.addEventListener('submit', handleFormCardSubmit);