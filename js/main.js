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
        const bookElement = createBookElement(book);
        libraryDisplay.appendChild(bookElement);
    })
}

function displayNewBookInLibrary() {

}

function clearLibraryDisplay() {
    while (libraryDisplay.firstChild) {
        libraryDisplay.removeChild(libraryDisplay.lastChild);
    }
}

function createBookElement(book) {
    const card = document.createElement('div');
    const cardBody = document.createElement('div');
    const title = document.createElement('p');
    const author = document.createElement('p');
    const pages = document.createElement('p');
    const read = document.createElement('p');
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';

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

    card.appendChild(cardBody);

    return card;
}