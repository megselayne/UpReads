import React, {Component, useState} from 'react'
import {Link} from 'react-router-dom';
import EditShelf from './EditShelf'


function CanAddEdit(userState, shelf, saveShelf) {
  const [visibility, setVisibility] = useState(false)
  if(userState.user){
    if(userState.user.id !== shelf.creator_user_id){
      return <img className='add-logo' 
                src='https://www.flaticon.com/premium-icon/icons/svg/3114/3114793.svg'
                onClick={() => saveShelf(shelf.id)} />    
    }
    else if(userState.user.id === shelf.creator_user_id){
      if(!visibility){
        return <img className='add-logo' src='https://www.flaticon.com/premium-icon/icons/svg/657/657120.svg'
        onClick={() => setVisibility(true)}
        />
        }
        else{
          return <EditShelf shelf={shelf} />
        } 
      
    }
  }
}

const Shelf = (props) =>(

        <div>
        {
          props.shelf.map(shelf => {
            return (
              <div>
                <div className='shelf-books'>
                <h3>{shelf.shelf_name}</h3>
               { CanAddEdit(props.userState, shelf, props.saveShelf) }
                </div>
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