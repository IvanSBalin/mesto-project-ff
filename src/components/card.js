import {fullScreenImage} from "./modal";
//@todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

// @todo: Функция создания карточки
export function createCard(card, cardDelete) {
    const cardElement = cardTemplate.cloneNode(true);
    const cardTitle = cardElement.querySelector('.card__title');
    const cardImage = cardElement.querySelector('.card__image');
    const deleteButton = cardElement.querySelector('.card__delete-button');
    const likeButton = cardElement.querySelector('.card__like-button');

    cardTitle.textContent = card.name;
    cardImage.src = card.link;
    cardImage.alt = card.name;

    deleteButton.addEventListener('click', function (evt) {
        cardDelete(evt.target.closest('.places__item'))
    });

    likeButton.addEventListener('click', function (evt) {
        if (evt.target.classList.contains('card__like-button')) {
            (likeButton.classList.toggle('card__like-button_is-active'))
        }
    });

    cardImage.addEventListener('click', function () {
        fullScreenImage(card.link, card.name)
    });

    return cardElement;
}

//@todo: Функция удаления карточки
export function cardDelete(item) {
   item.remove();
}