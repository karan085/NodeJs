import React, { Component } from 'react';
import Movie from './Movie';
class MoviesList extends Component {
    constructor(props) {
        super(props);
    }
   
    render() { 
      const {movies, query} = this.props;
      const filteredMovies = movies.filter(mov =>{ return mov.movieName.toLowerCase().includes(query.toLowerCase())});
      if(this.props.movies.length === 0){
        return <h3 className="label label-default">No Movie Show Available</h3>
      }
        return ( <div>
            <h3>Available Shows</h3>
            <table className="table table-sm">
              <thead className="thead-light">
                <tr>
                  <th>Name</th>
                  <th>Ratings</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>
              {filteredMovies.sort((a, b) => a.duration - b.duration).reverse().map((m,i) => ( <Movie movie={m} 
              key ={i}></Movie> ))}
        </tbody>
            </table>
          </div> );
    }
}
 
export default MoviesList;