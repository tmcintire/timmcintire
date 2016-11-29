import React from 'react';

export const WorkItem = props => (
  <div className="portfolio-section">
    <div className="header-section">
      <p className="text-center work-title">{props.content}</p>
    </div>
    <div className="description-section">
      <a target="_blank" rel="noopener noreferrer" href={props.imgUrl}>
        <div className="image-wrapper">
          <img role="presentation" className="img-responsive portfolio-image" src={props.imgUrl} />
        </div>
      </a>

      <h4 className="text-center"><u>Technologies Used</u></h4>
      <p>{props.tech}</p>

      <h4 className="text-center"><u>Summary</u></h4>
      <p className="description">{props.description}</p>
    </div>
  </div>
);

WorkItem.propTypes = {
  content: React.PropTypes.string,
  imgUrl: React.PropTypes.string,
  tech: React.PropTypes.string,
  description: React.PropTypes.string,
};
