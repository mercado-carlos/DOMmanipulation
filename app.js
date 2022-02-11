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
