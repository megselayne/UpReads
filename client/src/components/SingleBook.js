import React, {Component} from 'react'

class SingleBook extends Component {
    render() {
        return(
            <>
            <h1>Hello Single Book </h1>
            {this.props.book.volumeInfo.imageLinks.smallThumbnail && <img className='book-img' 
                    src={this.props.book.volumeInfo.imageLinks.smallThumbnail}
            /> }
            <h5>{this.props.book.volumeInfo.title}</h5>    
            <h6>{this.props.book.volumeInfo.authors[0]}</h6>
            <p>{this.props.book.volumeInfo.description}</p>
            </>
        )
    }
}

export default SingleBook;