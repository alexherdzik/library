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
    myLibrary.push(new Book('dummy title'));
}

function displayBooksInLibrary() {
    myLibrary.forEach(book => {
        const p = document.createElement('p');
        p.textContent = book.title;
        libraryDisplay.appendChild(p);
    })
}

function clearLibraryDisplay() {
    while (libraryDisplay.firstChild) {
        libraryDisplay.removeChild(libraryDisplay.lastChild);
    }
}