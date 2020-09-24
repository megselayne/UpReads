import React, {Component} from 'react'
import Home from './Home';
import Profile from './Profile';
import Search from './Search';
import SingleBook from './SingleBook';

class StateController extends Component {
    constructor(props){
        super(props)
        this.state=({
            isLoaded: false,
            currentPage: props.currentPage,
            publicShelfBooks: null,
            searchResults: null,
            currentId: props.currentId,
        })
    }
    componentDidMount() {
        if(this.state.currentPage === 'home'){
            this.getPublicBooks()
        }
        else if(this.state.currentPage === 'show'){
            this.getSingleBook()
        }
        else if(this.state.currentPage === 'search'){
            this.setState({
                isLoaded: true,
            })
        }
    }
    

    getPublicBooks = () => {
        fetch(`/api/v1/books/home`)
        .then(books => books.json())
        .then(books => {
            this.setState({
                publicShelfBooks: books,
                isLoaded: true,
            })
        })
    }

    searchBooks = (e, query) => {
        e.preventDefault()
        fetch(`/api/v1/books/search`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                search: query
            })
        })
        .then(res => res.json())
        .then(res => {
            console.log(res)
            this.setState({
                searchResults: res
            })
            
        })
        .catch(err => {
            console.log(err)
        })
    }

    getSingleBook = () => {
        fetch(`/api/v1/books/single/${this.state.currentId}`)
        .then(res => res.json())
        .then(res => {
            this.setState({
                singleBook: res,
                isLoaded: true,
            })
        })
    }

    decideWhichToRender =() => {
        switch(this.state.currentPage) {
            case 'home':
                return <Home books={this.state.publicShelfBooks}/>
            case 'search':
                return <Search searchFunc={this.searchBooks} searchResults={this.state.searchResults}/>
            case 'profile':
                return <Profile />
            case 'show':
                return <SingleBook book={this.state.singleBook}/>
        }
    }
    render(){
        return(
            <>
            {(this.state.isLoaded) ? this.decideWhichToRender() : <h1>Loading...</h1>}
            </>
        )
    }
}

export default StateController; 