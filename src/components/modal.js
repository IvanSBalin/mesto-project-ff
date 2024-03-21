// opening the modal window and adding event listener
function openModalWindow(item) {
    item.classList.add('popup_is-opened');
    const popupCloseButton = item.querySelector('.popup__close');

    popupCloseButton.addEventListener('click', closeModalWindow);
    document.addEventListener('keydown', closeModalWindowByEscape);
    item.addEventListener('click',closeModalWindowByClickOverlay);
}

// closing the modal window and adding event listener
function closeModalWindow() {
    const openedPopup = document.querySelector('.popup_is-opened');
    const popupCloseButton = openedPopup.querySelector('.popup__close');
    openedPopup.classList.remove('popup_is-opened');

    popupCloseButton.removeEventListener('click', closeModalWindowByClickOverlay);
    document.removeEventListener('keydown', closeModalWindowByEscape);
    openedPopup.removeEventListener('click',closeModalWindowByClickOverlay);
}

// handler for closing by escape button
function closeModalWindowByEscape(evt) {
    if(evt.key === 'Escape') {
        closeModalWindow(document.querySelector('.popup_is-opened'));
    }
}

// handler for closing by mouse click overlay
function closeModalWindowByClickOverlay(evt) {
    if(evt.target.classList.contains('popup__close') || evt.target.classList.contains('popup_is-opened')) {
        closeModalWindow(evt.currentTarget);
    }
}

export {openModalWindow, closeModalWindow};