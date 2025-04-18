function Book(title, author, pages, read){
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

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);

console.log(theHobbit.info());