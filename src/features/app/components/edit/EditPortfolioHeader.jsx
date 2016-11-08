import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as api from '../../../data/api';

@connect(store => ({
  data: store.data.data,
}))
export class EditPortfolioHeader extends React.Component {
  constructor() {
    super();
    this.state = {
      success_message: '',
    };
  }
  cancel = () => {
    window.location = '#/edit/portfolio';
  }
  save() {
    api.updatePortfolioHeader(this.header.value);
    this.setState({
      success_message: 'Saved!',
    });
  }
  render() {
    const { header } = this.props.data.portfolio;
    return (
      <div className="page-container">
        <h3 className="text-center">Edit Portfolio Header</h3>
        <textarea className="form-control" cols="7" type="text" ref={(ref) => { this.header = ref; }} defaultValue={header} />
        <button className="btn-spacing btn btn-primary" onClick={() => this.save()}>Save</button>
        <button className="btn-spacing btn btn-danger" onClick={this.cancel}>Cancel</button>
        <p className="success-message">{this.state.success_message}</p>
      </div>
    );
  }
}
