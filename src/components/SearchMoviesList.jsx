import React, { Component } from 'react';
class SearchMoviesList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            query: ""
         }
    }
    handleSearch = (e) =>{
        this.setState({[e.target.name]: e.target.value.trim()});
        this.props.searchMovie(this.state.query);
    }
    render() { 
        return (<form className="form-inline d-flex justify-content-center md-form form-sm mt-0">
        <i className="fas fa-search" aria-hidden="true"></i>
        <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search"
          aria-label="Search" name='query'
                    value={this.state.query}
                    onChange={this.handleSearch} />
      </form> );
    }
}
 
export default SearchMoviesList;