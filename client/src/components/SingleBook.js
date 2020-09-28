import React, {Component} from 'react'
import SaveBook from './SaveBook';
import Splash from './Splash';
import EditBook from './EditBook';

class SingleBook extends Component {
    

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
        return <div dangerouslySetInnerHTML={{__html: output }}></div>
    }

    render() {
        return(
            <>
            <Splash />
            <div className='container-2'>
            <div className='main'>
            {this.props.book.volumeInfo.imageLinks.smallThumbnail && <img className='book-img' 
                    src={this.props.book.volumeInfo.imageLinks.smallThumbnail}
            /> }
            {this.props.userShelves && <SaveBook userShelves={this.props.userShelves} saveBook={this.props.saveBook} book={this.props.book}/>}
            <h5><a className='primary-text' href={this.props.book.volumeInfo.previewLink} rel="noopener noreferrer" target='_blank'>{this.props.book.volumeInfo.title}</a></h5>    
            <h6>by {this.props.book.volumeInfo.authors[0]}</h6>
            { this.props.userBook && <p>{this.props.userBook.status}</p>}
            { this.props.userBook && <EditBook userBook={this.props.userBook}/>}
            {this.props.book.volumeInfo.averageRating && this.setStarRating(this.props.book.volumeInfo.averageRating)}
            <div dangerouslySetInnerHTML={{__html: this.props.book.volumeInfo.description}}></div>
            </div>
            </div>
            </>
        )
    }
}

export default SingleBook;