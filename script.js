const myLibrary = [
  {
    id: 0,
    title: "The Fellowship of the Ring",
    author: "JRR Tolkien",
    genre: "High Fantasy",
  },
  {
    id: 1,
    title: "Oblivion March",
    author: "Luke Noorda",
    genre: "Science Fiction",
  },
  {
    id: 2,
    title: "Winnie the Pooh",
    author: "Christopher Something",
    genre: "Children's Literature",
  },
];

function Book(title, author, genre) {
  if (!new.target) {
    throw Error("Use 'new'!");
  }
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.genre = genre;
}

function addBookToLibrary(title, author, genre) {
  book = new Book(title, author, genre);
  myLibrary.push(book);
  return;
}

function displayBooks(books) {
  let n = books.length;
  for (let i = 0; i < n; i++) {
    let bookCard = document.createElement("div");
    booksSection.appendChild(bookCard);
    bookCard.style.outline = "solid black 2px";
    bookCard.style.padding = "0.5rem";
    bookCard.style.backgroundColor = "white";

    let bookCardID = document.createElement("div");
    bookCard.appendChild(bookCardID);
    bookCardID.textContent = `${myLibrary[i].id}`;

    let bookCardTitle = document.createElement("div");
    bookCard.appendChild(bookCardTitle);
    bookCardTitle.textContent = `${myLibrary[i].title}`;

    let bookCardAuthor = document.createElement("div");
    bookCard.appendChild(bookCardAuthor);
    bookCardAuthor.textContent = `${myLibrary[i].author}`;

    let bookCardGenre = document.createElement("div");
    bookCard.appendChild(bookCardGenre);
    bookCardGenre.textContent = `${myLibrary[i].genre}`;
  }
}

const booksSection = document.querySelector("#books");
displayBooks(myLibrary);
