let books = document.querySelectorAll(".single-book")
const bookCon = document.querySelector(".book-collection-con")
const bookDisImg = document.querySelector(".book-img-dis")

const price = document.querySelector(".price")

let bookLists;
let bookID;


getBookLists();


function getBookLists() {
    fetch('http://localhost:3000/booklist')
        .then(response => response.json())
        .then(data => {
            bookLists = data;
            renderBookList(data)
        })
        .catch(error => console.error(error));
}


function renderBookList(bookList) {
    for (let i = 0; i < bookList.length; i++) {
        bookCon.innerHTML += `<div class="single-book" id="${bookList[i].book_id}">
        <div class="book-img-con">
            <img class="book-img" src="${bookList[i].src}" alt="">
        </div>

        <div class="book-data-con">
            <div class="book-tittle">"${bookList[i].book_title}</div>
            <div class="book-discription">"${bookList[i].book_discription}</div>
        </div>
    </div>`

        addEventListenerForBooks()
    }
}

function addEventListenerForBooks() {
    books = document.querySelectorAll(".single-book")

    for (let i = 0; i < books.length; i++) {
        books[i].addEventListener("click", () => {
            bookDisImg.src = bookLists[i].src;
            bookID = bookLists[i].book_id;
            openPanel();
            price.innerText = bookLists[i].price.soft_copy + " ETB";
        })
    }
}