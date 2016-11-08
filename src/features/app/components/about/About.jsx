import React from 'react';
import { connect } from 'react-redux';
import { Section } from './Section';

const Loading = require('react-loading-animation');

@connect(store => ({
  data: store.data.data,
}))
export class About extends React.Component {
  render() {
    const displayAbout = () => {
      if (this.props.data.loading === true) {
        return (
          <Loading />
        );
      }
      if (this.props.data.loading === false) {
        const { about } = this.props.data;
        const parsedAbout = about.split('\n').map((item, index) => (
          <Section key={index} text={item} />
        ));
        return (
          <div className="main-container">
            <h1 className="text-center">About Me</h1>
            <hr />
            {parsedAbout}
          </div>
        );
      }
    };
    return (
      <div className="page-container">
        {displayAbout()}
      </div>
    );
  }
}

About.propTypes = {
  data: React.PropTypes.shape({
    about: React.PropTypes.string,
    loading: React.PropTypes.bool,
  }),
};
