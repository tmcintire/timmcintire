import React from 'react';
import * as api from '../../../data/api';

export class AddPortfolioItem extends React.Component {
  cancel = () => {
    window.location = '#/edit/portfolio';
  }
  save = () => {
    const portfolioData = {
      content: this.content.value,
      description: this.description.value,
      imgUrl: this.imgUrl.value,
      tech: this.tech.value,
    };
    api.addPortfolioItem(portfolioData);
    window.location = '#/edit/portfolio';
  }
  render() {
    return (
      <div className="page-container">
        <h3 className="text-center">Add Entry to Portfolio</h3>
        <input className="form-control" type="text" ref={(ref) => { this.content = ref; }} placeholder="Entry title" />
        <input className="form-control" type="text" ref={(ref) => { this.imgUrl = ref; }} placeholder="Image Url" />
        <textarea className="form-control" rows="5" ref={(ref) => { this.description = ref; }} placeholder="Content" />
        <input className="form-control" type="text" ref={(ref) => { this.tech = ref; }} placeholder="Tech used to build this app" />
        <br />
        <button className="btn btn-spacing btn-primary" onClick={this.save}>Save</button>
        <button className="btn btn-spacing btn-danger" onClick={this.cancel}>Cancel</button>
      </div>
    );
  }
}
