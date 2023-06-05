// =============== Selecting Elements ===============
let libraryContainer = document.querySelector('.libraryContainer');
let form = document.querySelector('#addBook');
let addBook = document.querySelector('.addBook')
let newBook = document.querySelector('.newBook');
let AuthorInfo = document.querySelector('.authorInfo');
let TitleInfo = document.querySelector('.titleInfo');
let NumPagesInfo = document.querySelector('.numPagesInfo');
let IsReadInfo = document.querySelector('.isReadInfo');
// =============== End ==================

// ============= My Library Array ================
let myLibrary = [];

// ============= Book Function ===========
function Book(author,title,numPages,isRead){
    this.author = author;
    this.title = title;
    this.numPages = numPages;
    this.isRead = isRead;

}

let book = new Book('man','gone',55,'Yes');

myLibrary.push(book);

const display = () => {
    for(let i = 0; i < myLibrary.length; i++){        
        AuthorInfo.textContent = myLibrary[i].author;
        TitleInfo.textContent = myLibrary[i].title;
        NumPagesInfo.textContent = myLibrary[i].numPages;
        IsReadInfo.textContent = myLibrary[i].isRead;
        console.log(myLibrary[i]);
    };
};
display();

// ================ Add Book To Library ================
function addBookToLibrary(){
    
    // === Hide The form ===
    addBook.style.display = 'none';
    // === Show  the Form ===
    newBook.addEventListener('click',() =>{
        if(addBook.style.display === 'none'){
            addBook.style.display = 'block';
            
        }
    })

    // === Add Book To Library When Button Click ===
    form.addEventListener('submit',(event) =>{
        event.preventDefault();
        // === Get Value From Input ===
        const authorValue = document.getElementById('author').value;
        const titleValue = document.getElementById('title').value;
        const numPagesValue = document.getElementById('numPages').value;
        const isReadValue = document.getElementById('isRead').value;

        let book = new Book(authorValue,titleValue,numPagesValue,isReadValue);

        // =============== Creating The Element =================
        let bookCard = document.createElement('div');
        let bookInfo = document.createElement('div');
        let label = document.createElement('label');
        let author = document.createElement('div');
        let authorH = document.createElement('h4');
        let authorInfo = document.createElement('div');
        let title = document.createElement('div');
        let titleH = document.createElement('h4');
        let titleInfo = document.createElement('div');
        let numPages = document.createElement('div');
        let numPagesH = document.createElement('h4');
        let numPagesInfo = document.createElement('div');
        let isRead = document.createElement('div');
        let isReadH = document.createElement('h4');
        let isReadInfo = document.createElement('div');
        let btn = document.createElement('button');
        // ================== End =======================

        // ============ Setting Attribute ===========
        bookCard.setAttribute('class','bookCard');
        bookInfo.setAttribute('class','bookInfo');
        author.setAttribute('class','author');
        authorInfo.setAttribute('class','authorInfo');
        title.setAttribute('class','title');
        titleInfo.setAttribute('class','titleInfo');
        numPages.setAttribute('class','numPages');
        numPagesInfo.setAttribute('class','numPagesInfo');
        isRead.setAttribute('class','isRead');
        isReadInfo.setAttribute('class','isReadInfo');
        btn.setAttribute('class','remove');
        // ============= End ============

        // ============= Appending child to parent ===============
        libraryContainer.appendChild(bookCard);
        // === Book Card ===
        bookCard.appendChild(bookInfo);
        // === Book Info ===
        bookInfo.appendChild(label);
        bookInfo.appendChild(author);
        bookInfo.appendChild(title);
        bookInfo.appendChild(numPages);
        bookInfo.appendChild(isRead);
        bookInfo.appendChild(btn);
        // === Author ===
        author.appendChild(authorH);
        author.appendChild(authorInfo);
        // === Title ===
        title.appendChild(titleH);
        title.appendChild(titleInfo);
        // === Number of pages ===
        numPages.appendChild(numPagesH);
        numPages.appendChild(numPagesInfo);
        // === Have read ===
        isRead.appendChild(isReadH);
        isRead.appendChild(isReadInfo);
        // ============= End ==============

        // ============= Adding Text =========
        label.textContent = 'New Book';
        authorH.textContent = 'Author : ';
        titleH.textContent = 'Title : ';
        numPagesH.textContent = 'Number Of Pages : ';
        isReadH.textContent = 'Have You Read : ';
        btn.textContent = 'Remove Book';
        // ============== End ====================

        myLibrary.push(book);
        // === Loop Through The Array And Display The Last Object ===
        let last;
        const display = () => {
            for(let i = 0; i < myLibrary.length; i++){  
                last = myLibrary.pop();
                authorInfo.textContent = last.author;
                titleInfo.textContent = last.title;
                numPagesInfo.textContent = last.numPages;
                isReadInfo.textContent = last.isRead;
                console.table(last);
            };
            
        };
        display();
        
        addBook.style.display = 'none';
    });


};
console.log(addBookToLibrary());




