import React, {Component} from 'react';
import {Link} from 'react-router-dom';



      const Home = (props) => (
        <div>
          {
            props.books.map(shelf => {
              return (
                <div>
                  <span><Link to={`/shelf/${shelf.id}`} className='shelf-title'>{shelf.shelf_name}</Link></span>
                  <div className='shelf-books'>
                  {
                    shelf.google_books.map(book => {
                      return(
                      <div className='vertical-books'>
                      {book.cover_img && <Link to={`/books/${book.googleBookId}`}><img className='book-img' src={book.cover_img}/></Link> }
                      <p className='title'>{book.title}</p>
                      <p className='author'>{book.author}</p>
                      </div>
                      )
                    })
                  }
                  </div>
                </div>
              )
            })
          }
        </div>
      )

export default Home;