import React, {Component} from 'react'



class AddShelfForm extends Component {
    constructor(){
        super()
        this.state={
            shelfName: '',
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
                shelfName: ''
            })
            this.props.getUserShelves()

            
        })
        .catch(err => {
            console.log(err)
        }) 
    }

    render(){
        return (
            <form onSubmit={(e)=> this.createShelf(e, this.state.shelfName)}>
                <input type='text' name='shelfName' onChange={this.handleFormChange} 
                value={this.state.shelfName} placeholder='Shelf Name'/>
                <input className='primary click big' type='submit' value='Add' />
            </form>
        )
    }
}

export default AddShelfForm;