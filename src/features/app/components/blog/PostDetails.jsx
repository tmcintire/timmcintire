import React from 'react';
import { connect } from 'react-redux';
import * as api from '../../../data/api';
import { PostSection } from './PostSection';

const Loading = require('react-loading-animation');

@connect(store => ({
  data: store.data.data,
}))
export class PostDetails extends React.Component {
  constructor() {
    super();
    api.fetchBlogPosts();
  }
  handleBack = () => {
    window.location = '#/blog';
  }
  render() {
    const displayPost = () => {
      if (this.props.data.loading === true) {
        return (
          <Loading />
        );
      }
      if (this.props.data.loading === false) {
        const postId = this.props.params.id;
        const { blog } = this.props.data;
        const parsedContent = blog[postId].content.split('\n').map((item, index) => (
          <PostSection key={index} text={item} />
        ));
        return (
          <div className="page-container">
            <button className="btn btn-custom btn-lg" onClick={this.handleBack}>Back to Blog</button>
            <h3 className="text-center">{blog[postId].title}</h3>
            <p className="text-center">{blog[postId].date}</p>
            <p className="text-center">Author: {blog[postId].author}</p>
            <hr />
            <div className="blog-content">
              {parsedContent}
            </div>
          </div>
        );
      }
      return true;
    };
    return (
      <div>
        {displayPost()}
      </div>
    );
  }
}

PostDetails.propTypes = {
  params: React.PropTypes.shape({
    id: React.PropTypes.string,
  }),
  data: React.PropTypes.shape({
    blog: React.PropTypes.string,
    loading: React.PropTypes.boolean,
  }),
};
