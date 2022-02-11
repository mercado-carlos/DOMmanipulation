/* Get Element By ID */
const search = document.getElementById('search-books');
const bookList = document.getElementById('book-list');

console.log(search, bookList);

/* Get Element By Class or Tag */
var titles = document.getElementsByClassName('title');
var lis = document.getElementsByTagName('li');

Array.from(titles).forEach((title) => {
    console.log(title);
});

/* The Query Selector */
const wrap = document.querySelector('#wrapper');
const wmf = document.querySelector('#book-list li:nth-child(2) .name');
var books = document.querySelector('#book-list li .name');

console.log(books);

books = document.querySelectorAll('#book-list li .name');

Array.from(books).forEach((book) => {
    console.log(book);
});

/* Changing Text & HTML Content */
Array.from(books).forEach((book) => {
    //book.textContent = 'test';
    book.textContent += '(book title)';
});

const bookListQ = document.querySelector('#book-list');
//bookListQ.innerHTML = '<h2>Books and more books...</h2>';
bookListQ.innerHTML += '<p>This is how you add HTML</p>';
