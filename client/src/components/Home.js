import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Splash from './Splash'



      const Home = (props) => (
        <>
        <Splash />
        <div className='container-2'>
        <div className='main'>
          {
            props.books.map(shelf => {
              return (
                <>
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
                </>
              )
            })
          }
        </div>
        </div>
        </>
      )

export default Home;