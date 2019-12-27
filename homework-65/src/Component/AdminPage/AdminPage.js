import React, {Component} from 'react';
import axiosApi from "../../axiosApi";
import {Categories} from "../../CategoryPages";
import './AdminPage.css';

class AdminPage extends Component {
  state = {
    category: Categories[0],
    name: '',
    title: '',
    text: '',
  };
  getOption = (e) => {
    this.setState({category: e.target.value})
  };

  getVal = (e) => {
    this.setState({[e.target.name]: e.target.value})
  };

  getCategory = async () => {
    const name = this.state.category;
    const response = await axiosApi.get('/pages/' + name + '.json');

    this.setState({
      name: response.data.name,
      title: response.data.title,
      text: response.data.text
    });
  };

  componentDidMount() {
    this.getCategory();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.category !== prevState.category) {
      this.getCategory()
    }
  }

  putRequire = async (e) => {
    e.preventDefault()
    const id = this.state.category;
    const obj = {
      name: this.state.name,
      title: this.state.title,
      text: this.state.text
    };
    await axiosApi.put('/pages/' + id + '.json', obj);
    this.props.history.replace('/pages/' + id)
  };

  render() {
    return (
      <div className='EditBlock'>
        <form className='category'>
          <label>Page: </label>
          <select
            name="category"
            value={this.state.category}
            onChange={this.getOption}
          >
            {Categories.map(id => <option key={id}>{id}</option>)}
          </select>
        </form>
        <form className='textInputs'>
          <label>Content:</label>
          <input type="text" name="name" placeholder="Введите название" value={this.state.name}
                 onChange={(e) => this.getVal(e)}/>
          <input type="text" name="title" placeholder="Введите текст" value={this.state.title}
                 onChange={(e) => this.getVal(e)}/>
          <input type="textarea" name="text" placeholder="Введите текст" value={this.state.text}
                 onChange={(e) => this.getVal(e)}/>
          <button onClick={this.putRequire}>Save</button>
        </form>
      </div>
    );
  }
}

export default AdminPage;