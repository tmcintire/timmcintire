import React from 'react';
import { connect } from 'react-redux';
import * as api from '../../../data/api';

@connect(store => ({
  data: store.data.data,
}))
export class EditAbout extends React.Component {
  constructor() {
    super();
    this.state = {
      about_message: '',
    };
  }
  cancel = () => {
    window.location = '#/edit';
  }
  save = () => {
    api.updateAbout(this.about.value);
    this.setState({
      about_message: 'Saved!',
    });
  }
  render() {
    return (
      <div className="page-container">
        <h3 className="text-center">Edit About Page</h3>
        <textarea className="form-control"rows="8" ref={(ref) => { this.about = ref; }} defaultValue={this.props.data.about} />
        <br />
        <button className="btn-spacing btn btn-primary" onClick={this.save}>Save</button>
        <button className="btn-spacing btn btn-danger" onClick={this.cancel}>Cancel</button>
        <p className="success-message">{this.state.about_message}</p>
      </div>
    );
  }
}

EditAbout.propTypes = {
  data: React.PropTypes.shape({
    about: React.PropTypes.string,
  }),
};
