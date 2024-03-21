//@todo: Cards' template
const cardTemplate = document.querySelector('#card-template').content;

// @todo: Create card function
export function createCard(card, deleteCard, likeCard, openModalWindowCard) {
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    const cardTitle = cardElement.querySelector('.card__title');
    const cardImage = cardElement.querySelector('.card__image');
    const deleteButton = cardElement.querySelector('.card__delete-button');
    const likeButton = cardElement.querySelector('.card__like-button');

    cardTitle.textContent = card.name;
    cardImage.src = card.link;
    cardImage.alt = card.name;

    deleteButton.addEventListener('click', () => deleteCard(cardElement));

    likeButton.addEventListener ('click', () => likeCard(likeButton));

    cardImage.addEventListener('click', () => {openModalWindowCard(card);})

    return cardElement;
}

//@todo: Like card function.
export function likeCard(evt) {
    evt.classList.toggle('card__like-button_is-active');
}

//@todo: Delete card function
export function deleteCard(item) {
   item.remove();
}