import React from 'react';
import { connect } from 'react-redux';
import * as api from '../../../data/api';
import { Post } from './Post';

const Loading = require('react-loading-animation');

@connect(store => ({
  data: store.data.data,
}))
export class Blog extends React.Component {
  constructor() {
    super();
    api.fetchBlogPosts();
  }
  render() {
    const { blog } = this.props.data;
    const renderPosts = () => {
      if (blog) {
        return Object.keys(blog).map(post => (
          <Post key={post} id={post} {...blog[post]} />
        ));
      }
      return <Loading />;
    };
    return (
      <div className="page-container">
        <h1 className="text-center">Blog</h1>
        <hr />
        {renderPosts()}
      </div>
    );
  }
}
