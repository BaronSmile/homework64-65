import React, {Component, Fragment} from 'react';
import axiosApi from "../../axiosApi";
import MovieList from "../../Component/MovieList";


class MovieBlock extends Component {
  state = {
    movies: null,
    id: ''
  };
  getVal = (e) => {
    this.setState({[e.target.name]: e.target.value})
  };

  getMovies = async () => {
    const response = await axiosApi.get('/movies.json');
    this.setState({movies: response.data})
  };

  componentDidMount() {
    this.getMovies()
  }

  postRequire = async (e) => {
    e.preventDefault();
    const obj = {
      movie: this.state.movie,

    };
    await axiosApi.post('/movies.json', obj);
    await this.getMovies();
  };
  deleteMovie = async (id) => {
    await axiosApi.delete('/movies/' + id + '.json');
    await this.getMovies();
  };


  render() {
    return (
      <Fragment>
        <div className="inpBlock">
          <form>
            <input type="text" name="movie" onChange={this.getVal}/>
            <button onClick={this.postRequire}>Add</button>
          </form>
        </div>
        <div>
          {this.state.movies ? Object.keys(this.state.movies).map(id =>
              <MovieList
                remove={this.deleteMovie}
                key={id}
                movie={this.state.movies[id].movie}
                id={id}
              />) :
            <div>No Movies</div>}
        </div>
      </Fragment>
    );
  }
}

export default MovieBlock;