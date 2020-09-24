import React, {Component} from 'react'
import {Link} from 'react-router-dom';

const Shelf = (props) =>(

        <div>
        {
          props.shelf.map(shelf => {
            return (
              <div>
                <h3>{shelf.shelf_name}</h3>
                <div className='vertical-books'>
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

export default Shelf;