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
      <div className="main-container">
        <h1 className="text-center">Blog</h1>
        <form>
          <input type="text" ref={(ref) => { this.title = ref; }} placeholder="title" />
          <input type="text" ref={(ref) => { this.author = ref; }} placeholder="author" />
          <textarea rows="8" ref={(ref) => { this.content = ref; }} />
          <button className="button" onClick={e => this.handleSubmit(e)}>Submit</button>
        </form>
      </div>
    );
  }
}
