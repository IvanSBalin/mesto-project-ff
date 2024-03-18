// index.js
import '../pages/index.css'; // добавьте импорт главного файла стилей
import {initialCards} from "./cards";
import {createCard, cardDelete} from "./card";
import {openModalWindow, closeModalWindow} from "./modal.js";

// @todo: DOM узлы
const placesList = document.querySelector('.places__list');
// Modal windows for profile
const modalWindowTypeEdit = document.querySelector('.popup_type_edit');








// @todo: Вывести карточки на страницу
initialCards.forEach(function (item) {
   const newCard = createCard(item, cardDelete);
   placesList.appendChild(newCard);
});