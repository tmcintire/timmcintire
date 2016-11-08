import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as api from '../../../data/api';

@connect(store => ({
  data: store.data.data,
}))
export class Edit extends React.Component {
  constructor() {
    super();
    this.state = {
      about_message: '',
      portfolio_message: '',
    };
  }
  saveAbout() {
    api.updateAbout(this.about.value);
    this.setState({
      about_message: 'Saved!',
    });
  }
  savePortfolio() {
    api.updatePortfolio(this.portfolio.value);
    this.setState({
      portfolio_message: 'Saved!',
    });
  }
  render() {
    return (
      <div className="page-container">
        <h1>Edit Details</h1>
        <div className="edit-list">
          <li><Link to="/edit/about">Edit About</Link></li>
          <li><Link to="/edit/portfolio">Edit Portfolio</Link></li>
        </div>
      </div>
    );
  }
}

Edit.propTypes = {
  data: React.PropTypes.shape({
    about: React.PropTypes.string,
    portfolio: React.PropTypes.string,
  }),
};
