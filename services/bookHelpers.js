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
          id: current.id || null,
          shelf_id: current.shelf_id || null,
          creator_user_id: current.creator_user_id || null,
          google_books: [
            {
              googleBookId: current.google_book_id,
              title: current.title,
              author: current.author,
              cover_img: current.cover_img

            }
        ]
        }
      )
    }
    else {
      found.google_books.push({
        googleBookId: current.google_book_id,
        title: current.title,
        author: current.author,
        cover_img: current.cover_img

      })
    }
    return accum
  }, [])
}
//user shelf reducer
const userShelfReducer = (arr) => {
  return arr.reduce((accum, current) => {
    const found = accum.find(el => el.shelf_id === current.shelf_id);
    if(!found){
      accum.push(
        {
          shelf_name: current.shelf_name,
          id: current.id || null,
          shelf_id: current.shelf_id || null,
          google_books: [
            {
              googleBookId: current.google_book_id,
              title: current.title,
              author: current.author,
              cover_img: current.cover_img

            }
        ]
        }
      )
    }
    else {
      found.google_books.push({
        googleBookId: current.google_book_id,
        title: current.title,
        author: current.author,
        cover_img: current.cover_img

      })
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
    res.locals.publicBooks = reduced;
    next();
  })
  .catch((err) => {
    console.log(err);
  })
}

const getPublicShelf = (req, res, next) => {
  Shelves.getPublicShelfBooksById(req.params.id)
  .then(shelves => {
    console.log(shelves)
    const reduced = shelfReducer(shelves);
    res.locals.publicShelf = reduced;
    next();
  })
  .catch((err) => {
    console.log(err);
  })
}

const getUserShelf = (req, res, next) => {
  UserShelves.getUserShelfBooksById(req.user.id,req.params.id)
  .then(shelves => {
    const reduced = shelfReducer(shelves);
    res.locals.userShelf = reduced;
    next();
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
    const reduced = userShelfReducer(shelves, 'user_id');
    res.locals.userBooks = reduced;
    next();
  })
  .catch((err) => {
    console.log(err);
  })
}


module.exports = {
  searchBooks,
  getUserBooks,
  getSingleBook,
  getPublicBooks,
  getPublicShelf,
  getUserShelf,
}

