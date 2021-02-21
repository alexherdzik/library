const myLibrary = [1,2];
const libraryDisplay = document.querySelector('#library');

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

displayBooksInLibrary();