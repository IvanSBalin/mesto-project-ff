// opening the modal window and adding event listener
function openModalWindow(popup) {
    popup.classlist.add("popup_is-opened");

    document.addEventListener("keydown", closeModalWindowByEscape);
    popup.addEventListener("click", closeModalWindowByClick);
}

// closing the modal window and adding event listener
function closeModalWindow(popup) {
    popup.classList.remove("popup_is-opened");

    document.removeEventListener("keydown", closeModalWindowByEscape);
    popup.removeEventListener("click", closeModalWindowByClick);
}

// handler for closing by escape button
function closeModalWindowByEscape(evt) {
    if(evt.key === 'Escape') {
        closeModalWindow(document.querySelector(".popup_is-opened"));
    }
}

// handler for closing by mouse click button
function closeModalWindowByClick(evt) {
    if(evt.target.classList.contains("popup")) {
        closeModalWindow(evt.target);
    }
}

export {openModalWindow, closeModalWindow, closeModalWindowByEscape, closeModalWindowByClick};