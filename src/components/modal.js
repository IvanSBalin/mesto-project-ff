// opening the modal window and adding event listener
function openModalWindow(item) {
    item.classList.add('popup_is-opened');

    document.addEventListener('keydown', closeModalWindowByEscape);
    item.addEventListener('click',closeModalWindowByClickOverlay);
}

// closing the modal window and adding event listener
function closeModalWindow() {
    const openWindow = document.querySelector('.popup_is-opened');

    openWindow.classList.remove('popup_is-opened');

    document.removeEventListener('keydown', closeModalWindowByEscape);
    openWindow.removeEventListener('click',closeModalWindowByClickOverlay);
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