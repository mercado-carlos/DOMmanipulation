/* DOMContentLoaded Event */
document.addEventListener('DOMContentLoaded', () => {
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

    /* Nodes */
    const banner = document.querySelector('#page-banner');
    console.log('#page-banner node type is: ', banner.nodeType);
    console.log('#page-banner node name is: ', banner.nodeName);
    console.log('#page-banner has child node: ', banner.hasChildNodes());

    const clonedBanner = banner.cloneNode(true);
    console.log(clonedBanner);

    /* Traversing the DOM (part 1) */
    console.log('The parent node is: ', bookListQ.parentNode);
    console.log(
        'The parent element is: ',
        bookListQ.parentElement.parentElement
    );

    console.log(bookListQ.childNodes);
    console.log(bookListQ.children);

    /* Traversing the DOM (part 2) */
    console.log('book-list next sibling is: ', bookListQ.nextSibling);
    console.log('book-list next sibling is: ', bookListQ.nextElementSibling);

    console.log('book-list previuos sibling is: ', bookListQ.previousSibling);
    console.log(
        'book-list previuos sibling is: ',
        bookListQ.previousElementSibling
    );

    bookListQ.previousElementSibling.querySelector('p').innerHTML +=
        '<br/>Too cool for everyone else!';

    /* Events */
    const btns = document.querySelectorAll('#book-list .delete');
    /* Array.from(btns).forEach((btns) => {
    btns.addEventListener('click', (e) => {
        const li = e.target.parentElement;
        li.parentNode.removeChild(li);
    });
}); */

    const link = document.querySelector('#page-banner a');
    link.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('Navigation to', e.target.textContent, 'was prevented.');
    });

    /* Event Bubbling */
    const list = document.querySelector('#book-list ul');
    list.addEventListener('click', (e) => {
        if (e.target.className == 'delete') {
            const li = e.target.parentElement;
            list.removeChild(li);
        }
    });

    /* Interacting with Forms */
    const addForm = document.forms['add-book'];
    addForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const value = addForm.querySelector('input[type = "text"]').value;

        /* Creating Elements */
        const li = document.createElement('li');
        const bookName = document.createElement('span');
        const deleteBtn = document.createElement('span');

        bookName.textContent = value;
        deleteBtn.textContent = 'delete';

        /* Styles & Classes */
        bookName.classList.add('name');
        deleteBtn.classList.add('delete');

        li.appendChild(bookName);
        li.appendChild(deleteBtn);
        list.appendChild(li);
    });

    /* Attributes */
    /* const book = document.querySelector('li:first-child .name');
book.getAttribute('class');
console.log(book);
book.setAttribute('class', 'name-2');
console.log(book);
const hasBook = book.hasAttribute('href');
console.log(hasBook);
book.removeAttribute('class');
console.log(book); */

    /* Checkboxes & Change Events */
    const hideBox = document.querySelector('#hide');
    hideBox.addEventListener('change', (e) => {
        hideBox.checked
            ? (list.style.display = 'none')
            : (list.style.display = 'initial');
    });

    /* Custom Search Filter */
    const searchBar = document.forms['search-books'].querySelector('input');
    searchBar.addEventListener('keyup', (e) => {
        const term = e.target.value.toLowerCase();
        const books = list.getElementsByTagName('li');

        Array.from(books).forEach((book) => {
            const title = book.firstElementChild.textContent;

            title.toLowerCase().indexOf(term) != -1
                ? (book.style.display = 'block')
                : (book.style.display = 'none');
        });
    });

    /* Tabbed Content */
    const tabs = document.querySelector('.tabs');
    const panels = document.querySelectorAll('.panel');
    tabs.addEventListener('click', (e) => {
        if (e.target.tagName == 'LI') {
            const beansPanel = document.querySelector(e.target.dataset.beans);

            panels.forEach((panel) => {
                panel == beansPanel
                    ? panel.classList.add('active')
                    : panel.classList.remove('active');
            });
        }
    });
});
