const myLibrary = [];

function Book(title, author, pages, read){
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        if (read == true){
            return (this.title + " by " + this.author + ", " + this.pages + " pages, not read yet");
        }
        else{
            return (this.title + " by " + this.author + ", " + this.pages + " pages, read");
        }
    };
}

function addBookToLibrary(title, author, pages, read){
    const newBook = new Book(title, author, pages, read)
    myLibrary.push(newBook)
}

function showBooks(library){
    
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false);
addBookToLibrary("1984", "George Orwell", 328, false);

console.log(myLibrary);