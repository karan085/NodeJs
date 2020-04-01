import React, { Component } from 'react';

const initialState ={
    movieName : "",
    rating : "",
    duration : "",
    movieNameError : "",
    ratingError: "",
    durationError: ""
}
class AddShow extends Component {
    state = initialState;
    constructor(props) {
        super(props);
        
    }

    changeHandler = e =>{
        this.setState({[e.target.name]: e.target.value});
    }
    validateData = () =>{
        let ratingError = "";
        let movieNameError="";
        let durationError="";
        const {movieName, rating, duration} = this.state;
        let ratingValue = parseInt(rating);
        if(!(ratingValue >=0 && ratingValue<6)){
            ratingError ="Enter Rating between 1 to 5"
            this.setState({ratingError});
            return false;
        }
       if(movieName.length === 0){
            movieNameError="Enter Movie name";
            this.setState({movieNameError});
            return false;
        }
        if(duration.length === 0 || parseInt(duration) ===   0){
            durationError="Enter valid duration";
            this.setState({durationError});
            return false;
        }
        return true;
    }

    submitHandler = e => {
        e.preventDefault();
        var isValid = this.validateData();
        if(isValid){
            this.props.addMovie(this.state);
            this.setState(initialState);
        }
        
    }
    render() { 
        const {movieName, rating, duration, movieNameError, ratingError, durationError} = this.state;
        return ( <div>
            <h4>ADD NEW MOVIE SHOW</h4>
            <form onSubmit= {this.submitHandler}>
                <div>
                    <label>Movie Name </label>
                    <input type='text' name='movieName' value={movieName} onChange={this.changeHandler}/>
                </div>
                <div>{movieNameError}</div>
                <div>
                    <label>Rating (out of 5) </label>
                    <input type='text' name='rating' value={rating} onChange={this.changeHandler}/>
                </div>
                <div>{ratingError}</div>
                <div>
                    <label>Duration (in minutes) </label>
                    <input type='text' name='duration' value={duration} onChange={this.changeHandler}/>
                </div>
                <div>{durationError}</div>
                <button type='submit'>Submit</button>
            </form>
        </div> );
    }
}
 
export default AddShow;