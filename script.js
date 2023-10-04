const books = [
    {
      "author": "Chinua Achebe",
      "country": "Nigeria",
      "imageLink": "images/things-fall-apart.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
      "pages": 209,
      "title": "Things Fall Apart",
      "year": 1958
    },
    {
      "author": "Hans Christian Andersen",
      "country": "Denmark",
      "imageLink": "images/fairy-tales.jpg",
      "language": "Danish",
      "link": "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
      "pages": 784,
      "title": "Fairy tales",
      "year": 1836
    },
    {
      "author": "Dante Alighieri",
      "country": "Italy",
      "imageLink": "images/the-divine-comedy.jpg",
      "language": "Italian",
      "link": "https://en.wikipedia.org/wiki/Divine_Comedy\n",
      "pages": 928,
      "title": "The Divine Comedy",
      "year": 1315
    },
    {
      "author": "Unknown",
      "country": "Sumer and Akkadian Empire",
      "imageLink": "images/the-epic-of-gilgamesh.jpg",
      "language": "Akkadian",
      "link": "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n",
      "pages": 160,
      "title": "The Epic Of Gilgamesh",
      "year": -1700
    },
    {
      "author": "Unknown",
      "country": "Achaemenid Empire",
      "imageLink": "images/the-book-of-job.jpg",
      "language": "Hebrew",
      "link": "https://en.wikipedia.org/wiki/Book_of_Job\n",
      "pages": 176,
      "title": "The Book Of Job",
      "year": -600
    }];

//Metodo 1
for (let i = 0; i < books.length; i++) {
  let bookcontainer = document.getElementById('fase1');
  let book = document.createElement('div');
  book.setAttribute('class', 'book');
  bookcontainer.appendChild(book);

  let pAuthor = document.createElement('h3');
  let author = document.createTextNode(books[i].author);
  book.appendChild(pAuthor);
  pAuthor.appendChild(author);

  let pCountry = document.createElement('h3');
  let country = document.createTextNode(books[i].country);
  book.appendChild(pCountry);
  pCountry.appendChild(country);

  let pImageLink = document.createElement('img');
  pImageLink.src = books[i].imageLink;
  book.appendChild(pImageLink);

  let pLanguage = document.createElement('h3');
  let language = document.createTextNode(books[i].language);
  book.appendChild(pLanguage);
  pLanguage.appendChild(language);

  let pLink = document.createElement('a');
  pLink.href = books[i].link;
  pLink.innerHTML = 'Link de Wikipedia'
  book.appendChild(pLink);

  let pPages = document.createElement('h3');
  let pages = document.createTextNode(`Número de páginas: ${books[i].pages}`);
  book.appendChild(pPages);
  pPages.appendChild(pages);

  let pTitle = document.createElement('h2');
  let title = document.createTextNode(books[i].title);
  book.appendChild(pTitle);
  pTitle.appendChild(title);

  let pYear = document.createElement('h3');
  let year = document.createTextNode(books[i].year);
  book.appendChild(pYear);
  pYear.appendChild(year);
}

//Metodo 2
for (let i = 0; i < books.length; i++) {
  let bookcontainer = document.getElementById('fase2');
  bookcontainer.innerHTML += `<div class="book">
                                <h3>${books[i].author}</h3>
                                <h3>${books[i].country}</h3>
                                <img src="${books[i].imageLink}">
                                <a href='${books[i].link}'>Link de Wikipedia</a>
                                <h3>Número de páginas: ${books[i].pages}</h3>
                                <h2>${books[i].title}</h2>
                                <h3>${books[i].year}</h3>
                              </div>`
}