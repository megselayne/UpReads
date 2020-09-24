import React, {Component} from 'react'

class VerticalBookList extends Component {
    render() {
        return(
            <div className='vertical-books'>
            <h6>Powered by Google</h6>
            {
                this.props.searchResults.items.map(book => {
                    return(
                    <>
                    {book.volumeInfo.imageLinks && <img className='book-img' src={book.volumeInfo.imageLinks.smallThumbnail}/> }
                    <h5>{book.volumeInfo.title}</h5>
                    <h6>{book.volumeInfo.authors[0]}</h6>
                    </>
                    )
                })
            }
            </div>
        )
    }
}

export default VerticalBookList;