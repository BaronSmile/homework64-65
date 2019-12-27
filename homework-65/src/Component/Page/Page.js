import React, {Component} from 'react';
import axiosApi from "../../axiosApi";
import './Page.css'

class Page extends Component {
  state = {
    content: null,
  };
  getInfo = async () => {
    const url = this.props.match.path;
    const response = await axiosApi.get(url + '.json');
    this.setState({content: response.data})
  };

  componentDidMount() {
    this.getInfo()
  }

  render() {
    return this.state.content ? (
      <div className='Page'>
        <h3>{this.state.content.name}</h3>
        <p>{this.state.content.title}</p>
        <p>{this.state.content.text}</p>
      </div>
    ) : null;
  }
}

export default Page;