require('dotenv').config();
const fetch = require('node-fetch');
let key = process.env.GOOGLE_KEY;

const getBooks = () => {
  fetch(`https://www.googleapis.com/books/v1/volumes?q=pride+and+prejudice&key=${key}`)  
  .then(res => res.json())
  .then((res) => {
      console.log(res)
  })
}

getBooks()