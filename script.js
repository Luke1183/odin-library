const myLibrary = [];

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
