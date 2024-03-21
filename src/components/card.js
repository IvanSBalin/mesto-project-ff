
//@todo: Cards' template
const cardTemplate = document.querySelector('#card-template').content;

// @todo: Create card function
export function createCard(card, cardDelete, cardLike, openModalWindowCard) {
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    const cardTitle = cardElement.querySelector('.card__title');
    const cardImage = cardElement.querySelector('.card__image');
    const deleteButton = cardElement.querySelector('.card__delete-button');
    const likeButton = cardElement.querySelector('.card__like-button');

    cardTitle.textContent = card.name;
    cardImage.src = card.link;
    cardImage.alt = card.name;

    deleteButton.addEventListener('click', () => cardDelete(cardElement));

    likeButton.addEventListener ('click', () => cardLike(likeButton));

    cardImage.addEventListener('click', () => {openModalWindowCard(card);})

    return cardElement;
}

//@todo: Like card function.
export function cardLike(evt) {
    evt.classList.toggle('card__like-button_is-active');
}

//@todo: Delete card function
export function cardDelete(item) {
   item.remove();
}