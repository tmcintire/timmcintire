import React from 'react';
import moment from 'moment';
import * as api from '../../../data/api';

export class CreatePost extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    const postData = {
      title: this.title.value,
      author: this.author.value,
      content: this.content.value,
      date: moment().format('LLLL'),
    };
    api.createPost(postData);
  }
  render() {
    return (
      <div className="page-container">
        <h1 className="text-center">Blog</h1>
        <input className="form-control" type="text" ref={(ref) => { this.title = ref; }} placeholder="title" />
        <input className="form-control" type="text" ref={(ref) => { this.author = ref; }} placeholder="author" />
        <textarea className="form-control" rows="8" ref={(ref) => { this.content = ref; }} />
        <br />
        <button className="btn btn-primary" onClick={e => this.handleSubmit(e)}>Submit</button>
      </div>
    );
  }
}
