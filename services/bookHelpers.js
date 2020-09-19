require('dotenv').config();
const Shelves = require('../models/Shelves');
const fetch = require('node-fetch');
let key = process.env.GOOGLE_KEY;

//reduce shelf objects to one object per shelf, with array of google book ids as value for google_book_ids: [id, id, id]
const shelfReducer = (arr) => {
  return arr.reduce((accum, current) => {
    const found = accum.find(el => el.id === current.id);
    if(!found){
      accum.push(
        {
          shelf_name: current.shelf_name,
          id: current.id,
          google_book_ids: [current.google_book_id]
        }
      )
    }
    else {
      found.google_book_ids.push(current.google_book_id)
    }
    return accum
  }, [])
}

//temporary array to represent saved books
const savedSelections = ['p7uGzQEACAAJ', 'FylCUanlGhAC', 'ltClDwAAQBAJ', 'r6c8DAAAQBAJ', 'MWB3AgAAQBAJ', '5GbdTc9OJ78C']
const searchBooks = () => {
  fetch(`https://www.googleapis.com/books/v1/volumes?q=pride+and+prejudice&key=${key}`)  
  .then(res => res.json())
  .then((res) => {
      console.log(res)
  })
}

const getPublicBooks = (req, res, next) => {
  Shelves.getPublicShelfBooks()
  .then(shelves => {
    const reduced = shelfReducer(shelves);
    return reduced.map(shelf => {
      const fetches = shelf.google_book_ids.map(book => {
        return fetch(`https://www.googleapis.com/books/v1/volumes/${book}`)
      })
      Promise.all(fetches.map(el => {
        return el.json()
      }))
      .then(data => {
        console.log(data)
      })

    })
  })
  .catch((err) => {
    console.log(err);
  })
}

const getSingleBook = (book) => {
  fetch(`https://www.googleapis.com/books/v1/volumes/${book}`)
  .then(data => data.json())
  .then(data => {
    return data
  })
  .catch((err) => {
    console.log(err);
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
  getSavedBooks,
  getSingleBook,
  getPublicBooks
}