import React from 'react';

export const WorkItem = props => (
  <div className="portfolio-section">
    <p className="text-center work-title">{props.content}</p>
    <a target="_blank" rel="noopener noreferrer" href={props.imgUrl}>
      <div className="image-wrapper">
        <img role="presentation" className="img-responsive portfolio-image" src={props.imgUrl} />
      </div>
    </a>
    <p><strong>Description: </strong>{props.description}</p>
    <p><strong>Technologies Used: </strong>{props.tech} </p>
  </div>
);

WorkItem.propTypes = {
  content: React.PropTypes.string,
  imgUrl: React.PropTypes.string,
  tech: React.PropTypes.string,
  description: React.PropTypes.string,
};
