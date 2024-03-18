//@todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

// @todo: Функция создания карточки
export function createCard(card, cardDelete) {
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

//@todo: Функция удаления карточки
export function cardDelete(item) {
   item.remove();
}