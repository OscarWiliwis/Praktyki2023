const books = 
[
    {title: 'Total loss 100', pages: 600, genre: 'fantasy', rating: 7},
    {title: 'Total enlightenment', pages: 250, genre: 'romance', rating: 4},
    {title: 'Big loss', pages: 400, genre: 'fantasy', rating: 2},
    {title: 'Tenth Joy', pages: 32, genre: 'action', rating: 9},
    {title: 'Quickfix number 4', pages: 15, genre: 'fantasy', rating: 8},
    {title: 'World Ender 3', pages: 199, genre: 'fantasy', rating: 1},
    {title: 'Paranormal', pages: 200, genre: 'thriller', rating: 5},
];

/*Stwórz kompozycję która na tablicy „books” zlicza ilość liter w tytule (title) nie licząc spacji, gdzie
strony (pages) są parzyste oraz genre kończy się na literkę „y”. */

const Filter = (arr) => arr.filter((book) => book.pages % 2 == 0 & book.genre.endsWith("y"));
const sumLetters = (book) => book.reduce((letters, book) => letters + book.title.replace(/\s/g, '').length, 0);
const compose = (...functions) => (arr) => functions.reduce((acc, fn) => fn(acc), arr);

let result = compose(Filter, sumLetters);

/*Stwórz kompozycję która na tablicy „books” zlicza ilość pozytywnych ocen (rating > 5), gdzie
strony (pages) są liczbą nieparzystą oraz tytuł (title) zawiera liczbę. */

const Filter1 = (arr) => arr.filter((book) => /\d+/.test(book.title) && book.pages % 2 == 1 && book.rating > 5);
const sumPages = (book) => book.reduce((ratingsAbove5) => ratingsAbove5 + 1, 0);
const compose1= (...functions) => (arr) => functions.reduce((acc, fn) => fn(acc), arr);

let result1 = compose1(Filter1, sumPages);

/*Stwórz kompozycję która na tablicy „books” zwraca drugi najdłuższy tytuł (title).*/

const sortBooks = (arr) => arr.sort((min, max) => max.title.length - min.title.length);
const titles = (arr) => arr.map(({ title }) => title);
const compose2 = (...functions) => (arr) => functions.reduce((acc, fn) => fn(acc), arr);

let result2 = compose2(sortBooks, titles);

//1 zadanie
console.log(result(books));

//2 zadanie
console.log(result1(books));

//3 zadanie
console.log(result2(books));