import React, {Component} from 'react';
import {Link} from 'react-router-dom';



      const Home = (props) => (
        <div>
          {
            props.books.map(shelf => {
              return (
                <div>
                  <span><Link to={`/shelf/${shelf.id}`}>{shelf.shelf_name}</Link></span>
                  <div className='shelf-books'>
                  {
                    shelf.google_books.map(book => {
                      return(
                      <div className='vertical-books'>
                      {book.cover_img && <Link to={`/books/${book.googleBookId}`}><img className='book-img' src={book.cover_img}/></Link> }
                      <h5>{book.title}</h5>
                      <h6>{book.author}</h6>
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