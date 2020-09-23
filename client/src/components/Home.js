import React, {Component} from 'react'



    const templates = {
        template1: {
          items: [1, 2]
        },
        template2: {
          items: [2, 3, 4]
        },
      };
      
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
                        <>
                      {book.volumeInfo.imageLinks && <img src={book.volumeInfo.imageLinks.smallThumbnail}/> }
                      <h5>{book.volumeInfo.title}</h5>
                      <h6>{book.volumeInfo.authors[0]}</h6>
                      </>
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