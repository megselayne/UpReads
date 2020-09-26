import React, {Component} from 'react'
import VerticalBookList from './VerticalBookList';
import Splash from './Splash';

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
            <Splash heading='Find Your next UpRead'/>
            <div className='main'>
            <form className='row' onSubmit={(e)=> this.props.searchFunc(e,this.state.query)}>
                <input type='text' name='query' value={this.state.name}
                onChange={this.handleFormChange} placeholder='Title, Author, Subject' />
                <input className='primary click big' type='submit' value='Search' />
            </form>
            <img src='https://books.google.com/googlebooks/images/poweredby.png' />
            {this.props.searchResults && <VerticalBookList searchResults={this.props.searchResults} userShelves={this.props.userShelves} />}
            </div>
            </>

        )
    }
}

export default Search;