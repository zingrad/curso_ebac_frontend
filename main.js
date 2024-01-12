function LiteraryWork(name, author) {
    this.name = name;
    this.author = author;
}



function Book (name,author,genre,isSaga){
    LiteraryWork.call(this,name,author);
    this.genre = genre;
   this.isSaga = isSaga;
}


function Manga  (name,author,genre,volumes,isItFinished){
    LiteraryWork.call(this,name,author);
    this.genre = genre;
    this.volumes = volumes; 
    this.isItFinished = isItFinished;
}

const Manga1 = new Manga("Death Note","Takeshi Obata","Supernatural",12,true);
const Book1 = new Book("Lords Of The Ring","J. R. R. Tolkien","Fantasy",true);
const Manga2 = new Manga("Hunter x Hunter","Yoshihiro Togashi","Shonen",34,false);
console.log(Manga1);
console.log(Book1);
console.log(Manga2);