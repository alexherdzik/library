const myLibrary = [];
const libraryDisplay = document.getElementById('library');
const newBookBtn = document.getElementById('new-book');
const addBookBtn = document.getElementById('add-book');
const modal = document.querySelector('.modal');
const openClass = 'open';

newBookBtn.addEventListener('click', () => {
    document.querySelector('.modal').classList.add(openClass);
});

addBookBtn.addEventListener('click', () => {
    addBookToLibrary();
    clearLibraryDisplay();
    displayBooksInLibrary();
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

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    const title = document.getElementById('book-title').value;
    const author = document.getElementById('book-author').value;
    const pages = document.getElementById('book-pages').value;
    const read = document.getElementById('book-read').checked;
    myLibrary.push(new Book(title, author, pages, read));
}

function displayBooksInLibrary() {
    myLibrary.forEach(book => {
        for (const key in book) {
            const p = document.createElement('p');
            p.textContent = `${key}: ${book[key]}`;
            libraryDisplay.appendChild(p);
        }
    })
}

function clearLibraryDisplay() {
    while (libraryDisplay.firstChild) {
        libraryDisplay.removeChild(libraryDisplay.lastChild);
    }
}