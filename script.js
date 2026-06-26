const booksSection = document.querySelector("#books");

const form = document.querySelector("form");

const dialog = document.getElementById("add-book-dialog");

const addBookButton = document.getElementById("add-book");

const removeAllButton = document.getElementById("remove-all");

const confirmBookButton = dialog.querySelector("#confirm-book");

// let myLibrary = [
//   {
//     id: 0,
//     title: "The Fellowship of the Ring",
//     author: "JRR Tolkien",
//     genre: "High Fantasy",
//     status: "unread",
//   },
//   {
//     id: 1,
//     title: "Oblivion March",
//     author: "Luke Noorda",
//     genre: "Science Fiction",
//     status: "read",
//   },
//   {
//     id: 2,
//     title: "Winnie the Pooh",
//     author: "Christopher Something",
//     genre: "Children's Literature",
//     status: "read",
//   },
// ];

let myLibrary = [];

function Book(title, author, genre) {
  if (!new.target) {
    throw Error("Use 'new'!");
  }
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.genre = genre;
  this.status = "unread";
}

function removeBook(i) {
  myLibrary.splice(i, 1);
  removeBooks();
  displayBooks(myLibrary);
}

function addBookToLibrary(title, author, genre) {
  book = new Book(title, author, genre);
  myLibrary.push(book);
  return;
}

function removeBooks() {
  while (booksSection.firstChild) {
    booksSection.removeChild(booksSection.firstChild);
  }
}

function toggleRead(index) {
  if (myLibrary[index].status === "read") {
    myLibrary[index].status = "unread";
  } else {
    myLibrary[index].status = "read";
  }
  removeBooks();
  displayBooks(myLibrary);
}

function displayBooks(books) {
  let n = books.length;
  if (n === 0) {
    let helpMessage = document.createElement("div");
    booksSection.appendChild(helpMessage);
    helpMessage.textContent = "Add a book!";
  } else {
    for (let i = 0; i < n; i++) {
      let bookCard = document.createElement("div");
      booksSection.appendChild(bookCard);
      bookCard.style.outline = "solid black 2px";
      bookCard.style.padding = "0.5rem";
      bookCard.style.backgroundColor = "white";
      bookCard.style.display = "grid";
      bookCard.style.gap = "0.5rem";
      // bookCard.style.gridTemplateRows = "1fr";

      let bookCardText = document.createElement("div");
      bookCard.appendChild(bookCardText);
      bookCardText.setAttribute("class", "book-card-text");

      let bookCardTitleLabel = document.createElement("div");
      bookCardText.appendChild(bookCardTitleLabel);
      bookCardTitleLabel.textContent = "Title:";
      bookCardTitleLabel.setAttribute("class", "book-card-text-labels");

      let bookCardTitle = document.createElement("div");
      bookCardText.appendChild(bookCardTitle);
      bookCardTitle.textContent = `${myLibrary[i].title}`;
      bookCardTitle.setAttribute("class", "book-card-text-content");

      let bookCardAuthorLabel = document.createElement("div");
      bookCardText.appendChild(bookCardAuthorLabel);
      bookCardAuthorLabel.textContent = "Author:";
      bookCardAuthorLabel.setAttribute("class", "book-card-text-labels");

      let bookCardAuthor = document.createElement("div");
      bookCardText.appendChild(bookCardAuthor);
      bookCardAuthor.textContent = `${myLibrary[i].author}`;
      bookCardAuthor.setAttribute("class", "book-card-text-content");

      let bookCardGenreLabel = document.createElement("div");
      bookCardText.appendChild(bookCardGenreLabel);
      bookCardGenreLabel.textContent = "Genre:";
      bookCardGenreLabel.setAttribute("class", "book-card-text-labels");

      let bookCardGenre = document.createElement("div");
      bookCardText.appendChild(bookCardGenre);
      bookCardGenre.textContent = `${myLibrary[i].genre}`;
      bookCardGenre.setAttribute("class", "book-card-text-content");

      let bookCardStatusLabel = document.createElement("div");
      bookCardText.appendChild(bookCardStatusLabel);
      bookCardStatusLabel.textContent = "Status:";
      bookCardStatusLabel.setAttribute("class", "book-card-text-labels");

      let bookCardStatus = document.createElement("div");
      bookCardText.appendChild(bookCardStatus);
      bookCardStatus.textContent = `${myLibrary[i].status}`;
      bookCardStatus.setAttribute("class", "book-card-text-content");

      let bookCardButtons = document.createElement("div");
      bookCard.appendChild(bookCardButtons);
      bookCardButtons.setAttribute("class", "book-card-buttons");

      let toggleReadStatus = document.createElement("button");
      bookCardButtons.appendChild(toggleReadStatus);
      toggleReadStatus.textContent = "Read";
      toggleReadStatus.setAttribute("class", "toggle-status");
      toggleReadStatus.addEventListener("click", function () {
        toggleRead(i);
      });

      let bookCardRemove = document.createElement("button");
      bookCardButtons.appendChild(bookCardRemove);
      bookCardRemove.textContent = "Remove";
      bookCardRemove.setAttribute("class", "remove-book");
      bookCardRemove.addEventListener("click", function () {
        removeBook(i);
      });
    }
  }
}

dialog.addEventListener("close", () => {
  if (dialog.returnValue === "confirm") {
    const data = new FormData(form);
    let bookTitle = data.get("book_title");
    let bookAuthor = data.get("book_author");
    let bookGenre = data.get("book_genre");

    if (bookGenre == "sci_fi") {
      bookGenre = "Science Fiction";
    } else if (bookGenre == "high_fantasy") {
      bookGenre = "High Fantasy";
    } else if (bookGenre == "childrens_literature") {
      bookGenre = "Children's Literature";
    } else {
      bookGenre = "Unclear";
    }

    addBookToLibrary(bookTitle, bookAuthor, bookGenre);

    removeBooks();
    displayBooks(myLibrary);
    console.log(dialog.returnValue);
  }
  if (dialog.returnValue === "cancel") {
    console.log(dialog.returnValue);
  }

  form.reset();
});

addBookButton.addEventListener("click", () => {
  dialog.showModal();
});

removeAllButton.addEventListener("click", () => {
  myLibrary = [];
  removeBooks();
  displayBooks(myLibrary);
});

displayBooks(myLibrary);
