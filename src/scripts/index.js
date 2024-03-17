// index.js
import '../pages/index.css'; // добавьте импорт главного файла стилей
import {initialCards} from "./cards";
// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы
const placesList = document.querySelector('.places__list');

// @todo: Функция создания карточки
function createCard(card, cardDelete) {
   const cardElement = cardTemplate.cloneNode(true);
   const cardTitle = cardElement.querySelector('.card__title');
   const cardImage = cardElement.querySelector('.card__image');
   const deleteButton = cardElement.querySelector('.card__delete-button');

   cardTitle.textContent = card.name;
   cardImage.src = card.link;
   cardImage.alt = card.name;

   deleteButton.addEventListener('click', function (evt) {
      cardDelete(evt.target.closest('.places__item'))
   });

   return cardElement;
}

// @todo: Функция удаления карточки
function cardDelete (card) {
   card.remove();
}

// @todo: Вывести карточки на страницу
initialCards.forEach(function (item) {
   const newCard = createCard(item, cardDelete);
   placesList.appendChild(newCard);
});