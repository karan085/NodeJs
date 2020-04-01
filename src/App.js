import React, { Component } from 'react';
import MoviesList from './components/MoviesList';
import AddShow from './components/AddShow';
import SearchMoviesList from './components/SearchMoviesList';
import "bootstrap/dist/css/bootstrap.min.css";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      movies : [
        
      ]
     }
  }

  addToMoviesList =(movie) =>{
    this.setState({
      movies: this.state.movies.concat(movie)
    })
 }

 handleSearchMovie = (query) =>{
  const movies = this.state.movies.filter(mov =>{ return mov.movieName.toLowerCase().includes(query.toLowerCase())});
    this.setState({ movies });
 }
  render() { 
    return (
      <div>
        <SearchMoviesList 
        searchMovie = {this.handleSearchMovie}/>
       <MoviesList movies ={this.state.movies}/>
       <AddShow 
       addMovie={this.addToMoviesList}
       />
       </div>
   );
  }
}
 
export default App;