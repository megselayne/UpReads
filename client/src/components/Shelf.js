import React, {Component, useState} from 'react'
import {Link} from 'react-router-dom';
import EditShelf from './EditShelf'
import Splash from './Splash';


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
        return <img className='add-logo' src='https://www.flaticon.com/premium-icon/icons/svg/2997/2997896.svg'
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
        <>
        <Splash heading={props.shelf[0].shelf_name}/>
        <div className='main'>
        {
          props.shelf.map(shelf => {
            return (
              <>
                <div className='row'>
                <h3 className='shelf-title'>{shelf.shelf_name}</h3>
               { CanAddEdit(props.userState, shelf, props.saveShelf) }
                </div>
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
      </>
)

export default Shelf;