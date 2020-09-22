require('dotenv').config();
const Shelves = require('../models/Shelves');
const UserShelves = require('../models/User_Shelves');
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


const searchBooks = (req, res, next) => {
  const searchBody = req.body.search.replace(' ', '+')
  fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchBody}&key=${key}`)  
  .then(res => res.json())
  .then((data) => {
      res.locals.search = data;
      next();
  })
}

const getPublicBooks = (req, res, next) => {
  Shelves.getPublicShelfBooks()
  .then(shelves => {
    const reduced = shelfReducer(shelves);
    Promise.all(
      reduced.map((shelf) =>
        Promise.all(shelf.google_book_ids.map((id) => fetch(`https://www.googleapis.com/books/v1/volumes/${id}`))).then((res) =>
          Promise.all(res.map((book) => book.json()))
        )
      )
    ).then((results) => {
      res.locals.publicBooks = results;
      next();
    });
  })
  .catch((err) => {
    console.log(err);
  })
}

const getSingleBook = (req, res, next) => {
  fetch(`https://www.googleapis.com/books/v1/volumes/${req.params.id}`)
  .then(data => data.json())
  .then(data => {
    res.locals.singleBook = data;
    next();
  })
  .catch((err) => {
    console.log(err);
  })
}


const getUserBooks = (req, res, next) => {
  UserShelves.getUserShelfBooks(req.user.id)
  .then(shelves => {
    const reduced = shelfReducer(shelves);
    Promise.all(
      reduced.map((shelf) =>
        Promise.all(shelf.google_book_ids.map((id) => fetch(`https://www.googleapis.com/books/v1/volumes/${id}`))).then((res) =>
          Promise.all(res.map((book) => book.json()))
        )
      )
    ).then((results) => {
      res.locals.userBooks = results;
      next();
    });
  })
  .catch((err) => {
    console.log(err);
  })
}


module.exports = {
  searchBooks,
  getUserBooks,
  getSingleBook,
  getPublicBooks
}

