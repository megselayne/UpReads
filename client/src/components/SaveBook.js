import React, {Component} from 'react'

class SaveBook extends Component {
    constructor(props){
        super(props)
        this.state={
            value: props.userShelves[0].shelf_name,
            shelf_id: props.userShelves[0].shelf_id,
            book: props.book
        }
    }
    handleFormChange = (e) => {
        this.setState({
            value: e.target.value.split(',')[0],
            shelf_id: e.target.value.split(',')[1],
        })
    }
    render(){
        return(
            <form onSubmit={(e)=> this.props.saveBook(e, this.state.shelf_id, this.state.book)}>
                <select value={[this.state.value, this.state.shelf_id]}
                onChange={this.handleFormChange}>
            {
                
                this.props.userShelves.map(shelf => (
                    <option key={shelf.shelf_id} value={[shelf.shelf_name, shelf.shelf_id]}>{shelf.shelf_name}</option>
                    
                ))
                
            }
                </select>
                <input type='submit' value='Save' />
            </form>
        )
    }
}

export default SaveBook;