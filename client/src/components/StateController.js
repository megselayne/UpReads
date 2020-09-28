import React, {Component} from 'react'
import Home from './Home';
import Profile from './Profile';
import Search from './Search';
import SingleBook from './SingleBook';
import Shelf from './Shelf';
import fetch from 'node-fetch';
import { Link, Redirect } from 'react-router-dom';

class StateController extends Component {
    constructor(props){
        super(props)
        this.state=({
            isLoaded: false,
            currentPage: props.currentPage,
            publicShelfBooks: null,
            searchResults: null,
            currentId: props.currentId,
            shelf: null,
            userShelves: null,
            fireRedirect: false,
            redirectPath: null,
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
        else if(this.state.currentPage === 'shelf'){
            this.getShelves()
        }
        else if(this.state.currentPage === 'profile'){
            this.getUserShelves()
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
            if(this.props.userState.auth){
                this.getUserShelves()
            }
            
        })
        .catch(err => {
            console.log(err)
        })
    }

    getUserBook = () => {
        fetch(`/api/v1/books/user/${this.state.currentId}`)
        .then(res => res.json())
        .then(res => {
            this.setState({
                userBook: res.userBook,
                isLoaded: true,
            })
            this.getUserShelves()

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
            if(this.props.userState.auth){
                this.getUserBook()
            }
        })
    }

    getShelves = () => {
        fetch(`/api/v1/shelf/${this.state.currentId}`)
        .then(res => res.json())
        .then(res => {
            this.setState({
                shelf: res,
                isLoaded: true,
            })
        })
    }
    
    getUserShelves = () => {
        fetch(`/api/v1/userShelf/all`)
        .then(res => res.json())
        .then(res => {
            this.setState({
                userShelves: res,
                isLoaded: true
            })
        })
    }

    saveShelf = (id) => {
        fetch(`/api/v1/userShelf/${id}`, {
            method: 'POST'
        })
        .then(res => res.json())
        .then(res => {
            console.log(res)
            this.setState({
                fireRedirect: true,
                redirectPath: '/user/profile'
            })
            this.getUserShelves()
            
        })
        .catch(err => {
            console.log(err)
        })
    }

    deleteShelf = (id) => {
        fetch(`/api/v1/userShelf/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(res => res.json())
        .then(res => {
            console.log(res)
            this.setState({
                fireRedirect: true,
                redirectPath: '/user/profile'
            })
            this.getUserShelves()

            
        })
        .catch(err => {
            console.log(err)
        }) 
    }

    createShelf = (e, shelf) => {
        e.preventDefault()
        console.log(shelf)
        fetch(`/api/v1/shelf`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                is_public: 'false',
                shelf_name: shelf
            })
        })
        .then(res => res.json())
        .then(res => {
            console.log(res)
            this.setState({
                fireRedirect: true,
                redirectPath: '/user/profile'
            })
            this.getUserShelves()

            
        })
        .catch(err => {
            console.log(err)
        }) 
    }

    saveBook = (e, shelf_id, book) => {
        e.preventDefault()
        fetch(`/api/v1/books/user/${shelf_id}/${book.id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: book.volumeInfo.title,
                author: book.volumeInfo.authors[0],
                cover_img: book.volumeInfo.imageLinks.smallThumbnail || null,
            })
        })
        .then(res => res.json())
        .then(res => {
            console.log(res)
            this.setState({
                fireRedirect: true,
                redirectPath: '/user/profile'
            })
            this.getUserShelves()

            
        })
        .catch(err => {
            console.log(err)
        }) 
    }

    deleteBook = (shelf_id, book_id) => {
        fetch(`/api/v1/books/user/${shelf_id}/${book_id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(res => res.json())
        .then(res => {
            console.log(res)
            this.setState({
                fireRedirect: true,
                redirectPath: '/user/profile'
            })
            this.getUserShelves()

            
        })
        .catch(err => {
            console.log(err)
        }) 
    }

    decideWhichToRender =() => {
        switch(this.state.currentPage) {
            case 'home':
                return <Home books={this.state.publicShelfBooks}/>
            case 'search':
                return <Search searchFunc={this.searchBooks} searchResults={this.state.searchResults} userShelves={this.state.userShelves}/>
            case 'profile':
                return <Profile userShelves={this.state.userShelves} deleteShelf={this.deleteShelf} getUserShelves={this.getUserShelves} userState={this.props.userState}/>
            case 'show':
                return <SingleBook book={this.state.singleBook} userBook={this.state.userBook} userShelves={this.state.userShelves} saveBook={this.saveBook} userState={this.props.userState} />
            case 'shelf':
                return <Shelf currentId={this.state.currentId} shelf={this.state.shelf} saveShelf={this.saveShelf} userState={this.props.userState} deleteBook={this.deleteBook}/>
        }
    }
    render(){
        return(
            <>
            {(this.state.isLoaded) ? this.decideWhichToRender() : <h1>Loading...</h1>}
            {this.state.fireRedirect && <Redirect push to={this.state.redirectPath} />}
            </>
        )
    }
}

export default StateController; 