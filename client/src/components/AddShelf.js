import React, {Component} from 'react'
import AddShelfForm from './AddShelfForm';

class AddShelf extends Component {
    constructor(){
        super()
        this.state={
            clickedAdd: false,
        }
    }
    
    expandform = () => {
        this.setState({
            clickedAdd: !this.state.clickedAdd,
        })
    }
    render(){
        return(
            <>
            {this.state.clickedAdd ? 
            <AddShelfForm getUserShelves={this.props.getUserShelves}/>
            : <button
            onClick={() => this.expandform()}>New Shelf</button>}
            </>
        )
    }
}

export default AddShelf;


