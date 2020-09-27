import React, {Component} from 'react'
import {Redirect} from 'react-router-dom';


class EditShelf extends Component {
    constructor(props){
        super(props)
        this.state={
            shelfName: props.shelf.shelf_name,
            fireRedirect: false,
            redirectPath: null,
            
        }
    }

    handleFormChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        })
    }

    createShelf = (e, shelf) => {
        e.preventDefault()
        console.log(shelf)
        fetch(`/api/v1/shelf/${this.props.shelf.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                shelf_name: shelf
            })
        })
        .then(res => res.json())
        .then(res => {
            console.log(res)
            this.setState({
                shelfName: '',
                fireRedirect: true,
                redirectPath: '/user/profile',
                
            })
            this.props.getUserShelves()

            
        })
        .catch(err => {
            console.log(err)
        }) 
    }

    render(){
        return (
            <>
            <form className='row' onSubmit={(e)=> this.createShelf(e, this.state.shelfName)}>
                <input type='text' name='shelfName' onChange={this.handleFormChange} 
                value={this.state.shelfName} placeholder='Shelf Name'/>
                <input className='primary click big' type='submit' value='Edit' />
            </form>
            {this.state.fireRedirect && <Redirect push to={this.state.redirectPath} />}
            </>
        )
    }
}

export default EditShelf;