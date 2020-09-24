import React, {Component} from 'react'
import VerticalBookList from './VerticalBookList';

class Search extends Component {
    constructor(){
        super()
        this.state={
            query: '',
        }
    }
    handleFormChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        })
    }

    render() {
        return(
            <>
            <form onSubmit={(e)=> this.props.searchFunc(e,this.state.query)}>
                <input type='text' name='query' value={this.state.name}
                onChange={this.handleFormChange} placeholder='Search' />
                <input type='submit' value='Search' />
            </form>
            {this.props.searchResults && <VerticalBookList searchResults={this.props.searchResults} />}
            </>

        )
    }
}

export default Search;