import React, {Component} from 'react';
import {Link} from 'react-router-dom';



      const Home = (props) => (
        <div>
          {
            props.books.map(shelf => {
              return (
                <div>
                  <h2>Shelf Name</h2>
                  <div className='shelf-books'>
                  {
                    shelf.map(book => {
                      return(
                        <div className='vertical-books'>
                      {book.volumeInfo.imageLinks && <img className='book-img' src={book.volumeInfo.imageLinks.smallThumbnail}/> }
                      <h5>{book.volumeInfo.title}</h5>
                      <h6>{book.volumeInfo.authors[0]}</h6>
                      <Link to={`/books/${book.id}`}><h6>More</h6></Link>
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