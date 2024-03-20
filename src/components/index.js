// index.js
import '../pages/index.css';
import {initialCards} from "./cards";
import {createCard, cardDelete} from "./card";
import {openModalWindow, closeModalWindow} from "./modal.js";

// @todo: DOM узлы
const placesList = document.querySelector('.places__list');
// Modal windows for profile
const profileEditButton = document.querySelector('.profile__edit-button');
const profileTypeEdit = document.querySelector('.popup_type_edit');
const profileAddButton = document.querySelector('.profile__add-button');
const modalWindowTypeEdit = document.querySelector('.popup_type_edit');
const modalWindowTypeAdd = document.querySelector('.popup_type_new-card');
const modalWindowTypeImage = document.querySelector('.popup_type_image');

const profileFormElement = document.querySelector('.popup__form');

const nameInput = profileFormElement.querySelector('.popup__input_type_name');
const jobInput = profileFormElement.querySelector('.popup__input_type_description');
const currentName = document.querySelector('.profile__title');
const currentJob = document.querySelector('.profile__description');

function handleFormSubmit(evt) {
   evt.preventDefault();
   currentName.textContent = nameInput.value;
   currentJob.textContent = jobInput.value;

   closeModalWindow(modalWindowTypeEdit);
}


// @todo: Вывести карточки на страницу
initialCards.forEach(function (item) {
   const newCard = createCard(item, cardDelete);
   placesList.appendChild(newCard);
});

profileEditButton.addEventListener('click', () => {
   openModalWindow(profileTypeEdit);
});

profileAddButton.addEventListener('click', () => {
   openModalWindow(modalWindowTypeAdd);
});

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
//formElement.addEventListener('submit', handleFormSubmit);