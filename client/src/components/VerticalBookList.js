import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import SaveBook from './SaveBook';

class VerticalBookList extends Component {
    constructor(props) {
        super(props)
        this.state=({
            fireRedirect: false,
            redirectPath: null,
        })
    }

    setRedirect = (id) => {
        console.log(`${id}`)
        this.setState({
            fireRedirect: true,
            redirectPath: `/books/${id}`
        })
        console.log(this.state.redirectPath)
        console.log(this.state.fireRedirect)
    }

    setStarRating = (rating) => {
        let output = ''
        for(let i = 1; i <= 5; i++){
            if(Math.floor(rating) >= i){
                output += '<span>&#x2605;</span>'
            }
            else{
                output+= '<span>&#x2606;</span>'
            }
        }
        return output
    }

    render() {
        return(
            <div className='vertical-list'>
            {
                this.props.searchResults.items ?
                (this.props.searchResults.items.map(book => {
                    return(
                    <div key={book.id} className='row'>
                    {book.volumeInfo.imageLinks && <Link to={`/books/${book.id}`}><img className='book-img' src={book.volumeInfo.imageLinks.smallThumbnail}/></Link> }
                    <div>
                    <h5>{book.volumeInfo.title}</h5>
                    <h6>by {book.volumeInfo.authors && book.volumeInfo.authors[0]}</h6>
                    </div>
                    </div>
                    )
                })
                ) : <h4>No Results! Try a Different Search</h4>
            }
            </div>
        )
    }
}

export default VerticalBookList;
