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

class Book {
    constructor(title, author, pages, read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

function addBookToLibrary() {
    const title = document.getElementById('book-title').value;
    const author = document.getElementById('book-author').value;
    const pages = document.getElementById('book-pages').value;
    const read = document.getElementById('book-read').checked;
    myLibrary.push(new Book(title, author, pages, read));
}

function displayBooksInLibrary() {
    myLibrary.forEach((book, i) => {
        const bookElement = createBookElement(book, i);
        libraryDisplay.appendChild(bookElement);
    })
}

function clearLibraryDisplay() {
    while (libraryDisplay.firstChild) {
        libraryDisplay.removeChild(libraryDisplay.lastChild);
    }
}

function createBookElement(book, i) {
    const card = document.createElement('div');
    card.setAttribute('id', i);
    const cardBody = document.createElement('div');
    const title = document.createElement('p');
    const author = document.createElement('p');
    const pages = document.createElement('p');
    const read = document.createElement('p');
    const removeBtn = document.createElement('button');
    removeBtn.addEventListener('click', (e) => {
        const id = e.target.parentNode.parentNode.id;
        myLibrary.splice(id, 1);
        clearLibraryDisplay();
        displayBooksInLibrary();
    });
    removeBtn.textContent = 'Remove';

    const readBtn = document.createElement('button');
    readBtn.addEventListener('click', (e) => {
        const id = e.target.parentNode.parentNode.id;
        myLibrary[id].read = !myLibrary[id].read;
        clearLibraryDisplay();
        displayBooksInLibrary();
    });
    readBtn.textContent = "Read";

    title.textContent = book.title;
    author.textContent = book.author;
    pages.textContent = `${book.pages} pages`;
    read.textContent = (book.read) ? 'Read' : 'Not yet read'; 

    card.classList.add('card');
    cardBody.classList.add('card-body');
    title.classList.add('card-title');

    cardBody.appendChild(title);
    cardBody.appendChild(author);
    cardBody.appendChild(pages);
    cardBody.appendChild(read);
    cardBody.appendChild(removeBtn);
    cardBody.appendChild(readBtn);

    card.appendChild(cardBody);

    return card;
}