const myLibrary = [1,2];
const libraryDisplay = document.getElementById('library');
const newBookBtn = document.getElementById('new-book');
const modal = document.querySelector('.modal');
const openClass = 'open';

/* Modal button */
newBookBtn.addEventListener('click', () => {
    document.querySelector('.modal').classList.add(openClass);
});

modal.addEventListener('click', event => {
    if (event.target === modal) {
        modal.classList.remove(openClass);
    }
});

document.addEventListener('keydown', event => {
    if (event.key === "Escape" && document.querySelector(".modal.open")) {
        modal.classList.remove(openClass);
    }
});

displayBooksInLibrary();

function Book() {

}

function addBookToLibrary() {

}

function displayBooksInLibrary() {
    myLibrary.forEach(book => {
        const p = document.createElement('p');
        p.textContent = book;
        libraryDisplay.appendChild(p);
    })
}