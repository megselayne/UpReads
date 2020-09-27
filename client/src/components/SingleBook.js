import React, {Component} from 'react'
import SaveBook from './SaveBook';
import Splash from './Splash';

class SingleBook extends Component {
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
            <h5>{this.props.book.volumeInfo.title}</h5>    
            <h6>{this.props.book.volumeInfo.authors[0]}</h6>
            <div dangerouslySetInnerHTML={{__html: this.props.book.volumeInfo.description}}></div>
            </div>
            </div>
            </>
        )
    }
}

export default SingleBook;