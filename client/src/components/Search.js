import React, {Component, useState} from 'react'

class Search extends Component {
    constructor(){
        super()
        this.state={
            query: ''
        }
    }
    handleFormChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        })
    }
    handleSubmit = (e) => {
        
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input type='text' name='query' value={this.state.name}
                onChange={this.handleFormChange} placeholder='Search' />
                <input type='submit' value='Search' />
            </form>
            
        )
    }
}

export default Search;