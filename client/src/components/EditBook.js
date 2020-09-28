import React, {Component} from 'react'
import {Redirect} from 'react-router-dom';


class EditBook extends Component {
    constructor(props){
        super(props)
        this.state={
            value: 'unread'
        }
    }
    handleFormChange = (e) => {
        this.setState({
            value: e.target.value,
        })
    }

    editBook = (e) => {
        e.preventDefault()
        fetch(`/api/v1/books/user/${this.props.userBook.id}/${this.props.userBook.google_book_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                status: this.state.value
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

    render(){
        return (
            <>
            <form className='row' onSubmit={(e)=> this.editBook(e)}>
                <select value={this.state.value}
                onChange={this.handleFormChange}>
                <option  value='unread'>Unread</option>
                <option  value='read'>Read</option>
                <option  value='reading'>Reading</option>
                </select>
                <input className='primary click big' type='submit' value='Edit' />
            </form>
            {this.state.fireRedirect && <Redirect push to={this.state.redirectPath} />}
            </>
        )
    }
}

export default EditBook;