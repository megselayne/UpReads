import React, {Component} from 'react'

class SaveBook extends Component {
    render(){
        return(
            <form>
                <select id='shelf' name='shelf'>
            {
                
                this.props.userShelves.map(shelf => (
                    <option key={shelf.shelf_id} value={shelf.shelf_name}>{shelf.shelf_name}</option>
                    
                ))
                
            }
                </select>
                <input type='submit' value='Add' />
            </form>
        )
    }
}

export default SaveBook;