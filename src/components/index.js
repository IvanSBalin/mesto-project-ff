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
const modalWindowTypeEdit = document.querySelector('.popup_type_edit');
const modalWindowTypeAdd = document.querySelector('.popup_type_new-card');
const modalWindowTypeImage = document.querySelector('.popup_type_image');
// @todo: Вывести карточки на страницу
initialCards.forEach(function (item) {
   const newCard = createCard(item, cardDelete, cardLike);
   placesList.appendChild(newCard);
});

profileEditButton.addEventListener('click', () => {
   openModalWindow(modalWindowTypeAdd);
});

profileAddButton.addEventListener('click', () => {
   openModalWindow(modalWindowTypeAdd);
});
