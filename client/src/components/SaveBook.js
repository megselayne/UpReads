import React, {Component} from 'react'

class SaveBook extends Component {
    constructor(props){
        super(props)
        this.state={
            value: props.userShelves[0].shelf_name,
            shelf_id: props.userShelves[0].shelf_id,
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
            <form>
                <select value={[this.state.value, this.state.shelf_id]}
                onChange={this.handleFormChange}>
            {
                
                this.props.userShelves.map(shelf => (
                    <option key={shelf.shelf_id} value={[shelf.shelf_name, shelf.shelf_id]}>{shelf.shelf_name}</option>
                    
                ))
                
            }
                </select>
                <input type='submit' value='Add' />
            </form>
        )
    }
}

export default SaveBook;