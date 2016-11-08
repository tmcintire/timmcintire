import React from 'react';
import { connect } from 'react-redux';
import * as api from '../../../data/api';

@connect(store => ({
  data: store.data.data,
}))
export class EditPortfolioEntry extends React.Component {
  constructor() {
    super();
    this.state = {
      success_message: '',
    };
  }
  cancel = () => {
    window.location = '#/edit/portfolio';
  }
  save = () => {
    const portfolioData = {
      content: this.content.value,
      description: this.description.value,
      imgUrl: this.imgUrl.value,
      tech: this.tech.value,
      id: this.props.params.id,
    };
    api.updatePortfolio(portfolioData);
    this.setState({
      success_message: 'Saved!',
    });
  }
  render() {
    const entry = this.props.data.portfolio.work[this.props.params.id];
    return (
      <div className="page-container">
        <h3 className="text-center">Edit {entry.content}</h3>
        <input className="form-control" type="text" ref={(ref) => { this.content = ref; }} defaultValue={entry.content} />
        <input className="form-control" type="text" ref={(ref) => { this.imgUrl = ref; }} defaultValue={entry.imgUrl} />
        <textarea className="form-control" rows="5" ref={(ref) => { this.description = ref; }} defaultValue={entry.description} />
        <input className="form-control" type="text" ref={(ref) => { this.tech = ref; }} defaultValue={entry.tech} />
        <br />
        <button className="btn btn-spacing btn-primary" onClick={this.save}>Save</button>
        <button className="btn btn-spacing btn-danger" onClick={this.cancel}>Cancel</button>
        <br />
        <p className="success-message">{this.state.success_message}</p>
      </div>
    );
  }
}

EditPortfolioEntry.propTypes = {
  data: React.PropTypes.shape({
    portfolio: React.PropTypes.shape({
      work: React.PropTypes.object // eslint-disable-line
    }),
  }),
  params: React.PropTypes.shape({
    id: React.PropTypes.string,
  }),
};
