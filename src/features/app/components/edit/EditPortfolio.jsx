import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

@connect(store => ({
  data: store.data.data,
}))
export class EditPortfolio extends React.Component {
  constructor() {
    super();
    this.state = {
      success_message: '',
    };
  }
  back =() => {
    window.location = '#/edit';
  }
  render() {
    const { work } = this.props.data.portfolio;
    return (
      <div className="page-container">
        <button className="btn btn-primary" onClick={this.back}>Back</button>
        <h3 className="text-center">Edit Portfolio Page</h3>
        <li><Link to="edit/portfolio/header">Edit Header</Link></li>
        <li><Link to="edit/portfolio/add">Add Entry</Link></li>
        {Object.keys(work).map(entry => (
          <div>
            <li><Link to={`edit/portfolio/${entry}`}>{work[entry].content}</Link></li>
          </div>
        ))}
      </div>
    );
  }
}
