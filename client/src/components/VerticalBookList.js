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
    render() {
        return(
            <div className='vertical-books'>
            <h6>Powered by Google</h6>
            {
                this.props.searchResults.items.map(book => {
                    return(
                    <div key={book.id}>
                    {book.volumeInfo.imageLinks && <Link to={`/books/${book.id}`}><img className='book-img' src={book.volumeInfo.imageLinks.smallThumbnail}/></Link> }
                    <h5>{book.volumeInfo.title}</h5>
                    <h6>{book.volumeInfo.authors[0]}</h6>
                    
                    </div>
                    )
                })
            }
            </div>
        )
    }
}

export default VerticalBookList;

//this used to be on line 34 -> moving to singleBook component for ease of form state
// {this.props.userShelves && <SaveBook userShelves={this.props.userShelves} />}