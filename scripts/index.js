// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы
const placesList = document.querySelector('.places__list');

// @todo: Функция создания карточки
function createCard(titleCard, linkImg) {
   const cardElement = cardTemplate.cloneNode(true);
   const cardTitle = cardElement.querySelector('.card__title');
   const cardImage = cardElement.querySelector('.card__image');
   const deleteButton = cardElement.querySelector('.card__delete-button');

   cardTitle.textContent = titleCard;
   cardImage.src =linkImg;
   cardImage.alt = 'Изображение места';

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
   const newCard = createCard(item.name, item.link);
   placesList.appendChild(newCard);
});