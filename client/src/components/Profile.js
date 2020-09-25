import React, {Component, useState} from 'react';
import {Link} from 'react-router-dom';
import AddShelf from './AddShelf';


const Profile = (props) => (
    
<div>
    <h4>Your Shelves</h4>
    <AddShelf createShelf={props.createShelf}/>
    {
    props.userShelves.map(shelf => {
        return (
        <div>
            
            <div className='shelf-books' key={shelf.shelf_id}>
            <span><Link to={`/shelf/${shelf.shelf_id}`}>{shelf.shelf_name}</Link></span>
            <img className='add-logo'src='https://www.flaticon.com/premium-icon/icons/svg/3031/3031157.svg'
            onClick={() => props.deleteShelf(shelf.shelf_id)}
            />
            </div>
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

export default Profile;