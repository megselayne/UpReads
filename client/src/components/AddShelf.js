import React, {Component} from 'react'


class AddShelf extends Component {
    constructor(){
        super()
        this.state={
            clickedAdd: false,
            shelfName: null,
        }
    }
    handleFormChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        })
    }
    expandform = () => {
        this.setState({
            clickedAdd: true,
        })
    }
    render(){
        return(
            <>
            {this.state.clickedAdd ? 
            // (<form onSubmit={(e) => this.props.createShelf(e, this.state.shelfName)}><input type='text' name='shelfName' onChange={this.handleFormChange} value={this.state.shelfName} placeholder='Shelf Name'/>
            //     <input type='submit' name='Add' />
            // </form>) 
            : <button
            onClick={() => this.expandform()}>New Shelf</button>}
            </>
        )
    }
}

export default AddShelf;