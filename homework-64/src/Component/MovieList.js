import React, {Component} from 'react';
import axiosApi from '../axiosApi';

class MovieList extends Component {
  state={
    movie: '',
    id: ''
  };

  putMovie=async ()=>{
    const id = this.state.id;
    const obj = {
      movie: this.state.movie,
    };
    await axiosApi.put('/movies/' + id + '.json', obj)
  };
  componentDidMount() {
    this.setState({movie: this.props.movie, id: this.props.id})
  }
  onChangeVal=(e)=>{
    this.setState({[e.target.name] : e.target.value});
    this.putMovie()
  };

  deleteMovie = async (e)=>{
    e.preventDefault();
    const id = this.state.id;
    await axiosApi.delete('/movies/' + id + '.json');
  };


  render() {
    return (
      <div className="form">
        <form>
          <input type="text" value={this.state.movie} name="movie" onChange={this.onChangeVal}/>
        </form>
        <button onClick={()=>this.props.remove(this.props.id)}>Delete</button>
      </div>
    );
  }
}

export default MovieList;