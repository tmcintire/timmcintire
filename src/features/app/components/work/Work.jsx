import React from 'react';
import { connect } from 'react-redux';
import { WorkItem } from './WorkItem';

const Loading = require('react-loading-animation');

@connect(store => ({
  data: store.data.data,
}))
export class Work extends React.Component {
  render() {
    const { loading } = this.props.data;
    const showHeader = () => {
      if (loading === true || loading === undefined) {
        return <Loading />;
      }
      if (loading === false) {
        const { header } = this.props.data.portfolio;
        return (
          <p className="text-center">{header}</p>
        );
      }
      return true;
    };
    const showWork = () => {
      if (loading === true) {
        return <Loading />;
      }
      if (loading === false) {
        const { work } = this.props.data.portfolio;
        return Object.keys(work).map(item => (
          <WorkItem key={item} id={item} {...work[item]} />
        ));
      }
      return true;
    };
    return (
      <div className="page-container">
        <h1 className="text-center">My Work</h1>
        {showHeader()}
        <hr />
        <div className="portfolio-container">
          {showWork()}
        </div>
      </div>
    );
  }
}

Work.propTypes = {
  data: React.PropTypes.shape({
    portfolio: React.PropTypes.string,
    loading: React.PropTypes.boolean,
  }),
};
