const myLibrary = [];

function Book(title, author, genre) {
  if (!new.target) {
    throw Error("Use 'new'!");
  }
  this.title = title;
  this.author = author;
  this.genre = genre;
}

function addBookToLibrary() {
  // take params, create a book then store it in the array
}
