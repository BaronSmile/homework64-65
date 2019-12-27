import React, {Component} from 'react';
import axiosApi from "../../axiosApi";

class ToDoList extends Component {
  state = {
    text: '',
    allToDoList: null,
  };

  getText = async () => {
    const response = await axiosApi.get('/todoList.json');
    this.setState({allToDoList: response.data});
  };

  async componentDidMount() {
    this.getText()
  };

  inputChangeHandler = e => this.setState({[e.target.name]: e.target.value});

  formInputHandler = async (e) => {
    e.preventDefault();

    const newTodoList = {
      text: this.state.text,
    };
    await axiosApi.post('/todoList.json', newTodoList);
    await this.getText();
  };

  deleteList = async (id) => {
    await axiosApi.delete('/todoList/' + id + '.json');
    this.getText()
  };

  render() {
    return (
      <div>
        <h1>ToDoList</h1>
        <form onSubmit={this.formInputHandler}>
          <input type="text" name='text' placeholder='Enter your to-do list' value={this.state.text}
                 onChange={this.inputChangeHandler}/>
          <button>Add</button>
        </form>
        <div>
          {this.state.allToDoList && this.state.allToDoList ? Object.keys(this.state.allToDoList).map(t => <div key={t}>
              <p>{this.state.allToDoList[t].text}</p>
              <button onClick={() => this.deleteList(t)}>Delete</button>
            </div>)
            : null}

        </div>
      </div>
    );
  }
}

export default ToDoList;
// <div className="cardMovie">
//   {this.state.movies ? Object.keys(this.state.movies).map(m => <div key={m}>
//     <MovieList
//       onChange={(e) => this.inputChangeHandler()}
//       deleteMovie={() => this.deleteMovie(m)}/>
//   </div>):null}
// </div>