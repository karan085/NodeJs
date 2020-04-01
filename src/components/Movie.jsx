import React, { Component } from 'react';
class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            
         }
    }
    render() { 
        const {movieName, rating, duration, key} = this.props.movie;
        return ( <tr key={key} >
            <td>{movieName}</td>
            <td>{rating}</td>
            <td>{duration}</td>
         </tr>);
    }
}
 
export default Movie;