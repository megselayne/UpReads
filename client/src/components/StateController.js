import React, {Component} from 'react'
import Home from './Home';
import Profile from './Profile';
import Search from './Search';
import SingleBook from './SingleBook';
import Shelf from './Shelf';
import fetch from 'node-fetch';
import { Redirect } from 'react-router-dom';

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

    decideWhichToRender =() => {
        switch(this.state.currentPage) {
            case 'home':
                return <Home books={this.state.publicShelfBooks}/>
            case 'search':
                return <Search searchFunc={this.searchBooks} searchResults={this.state.searchResults}/>
            case 'profile':
                return <Profile userShelves={this.state.userShelves} deleteShelf={this.deleteShelf}/>
            case 'show':
                return <SingleBook book={this.state.singleBook}/>
            case 'shelf':
                return <Shelf shelf={this.state.shelf} saveShelf={this.saveShelf} />
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