const modalWindowTypeImage = document.querySelector('.popup_type_image');
const modalWindowCaption = modalWindowTypeImage.querySelector('.popup__caption');
const modalWindowImage = modalWindowTypeImage.querySelector('.popup__image');
const modalWindowClose = modalWindowTypeImage.querySelector('.popup__close');

// opening the modal window and adding event listener
function openModalWindow(evt) {
    evt.classList.add("popup_is-opened");

    document.addEventListener("keydown", closeModalWindowByEscape);
    evt.addEventListener("click", closeModalWindowByClickOverlay);
}

// closing the modal window and adding event listener
function closeModalWindow(evt) {
    evt.classList.remove("popup_is-opened");

    document.removeEventListener("keydown", closeModalWindowByEscape);
    evt.removeEventListener("click", closeModalWindowByClickOverlay);
}

// handler for closing by escape button
function closeModalWindowByEscape(evt) {
    if(evt.key === 'Escape') {
        closeModalWindow(document.querySelector(".popup_is-opened"));
    }
}

// handler for closing by mouse click overlay
function closeModalWindowByClickOverlay(evt) {
    if(evt.target.classList.contains('popup__close') || evt.target.classList.contains('popup_is-opened')) {
        closeModalWindow(evt.currentTarget);
    }
}

export function fullScreenImage(link, name) {
    modalWindowCaption.textContent = name;
    modalWindowImage.src = link;
    modalWindowImage.alt = name;
    openModalWindow(modalWindowTypeImage);
    modalWindowClose.addEventListener('click', () => {
        closeModalWindow(modalWindowTypeImage)
    });
}

export {openModalWindow, closeModalWindow};