require('dotenv').config();
const fetch = require('node-fetch');
let key = process.env.GOOGLE_KEY;

//temporary array to represent saved books
const savedSelections = ['p7uGzQEACAAJ', 'FylCUanlGhAC', 'ltClDwAAQBAJ', 'r6c8DAAAQBAJ', 'MWB3AgAAQBAJ', '5GbdTc9OJ78C']
const searchBooks = () => {
  fetch(`https://www.googleapis.com/books/v1/volumes?q=pride+and+prejudice&key=${key}`)  
  .then(res => res.json())
  .then((res) => {
      console.log(res)
  })
}

const getSavedBooks = () => {
  const fetches = savedSelections.map((book) => {
    return fetch(`https://www.googleapis.com/books/v1/volumes/${book}`)
  })
  return Promise.all(fetches)
  .then((res) => {
    return Promise.all(res.map((el) => {
      return el.json()
    }))
  })
  .then((data) => {
    console.log(data)
  })
}

module.exports = {
  searchBooks,
  getSavedBooks
}