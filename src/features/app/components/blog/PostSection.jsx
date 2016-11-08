import React from 'react';

// Shows the individual paragraphs of a blogpost
export const PostSection = props => (
  <p>{props.text}</p>
);

PostSection.propTypes = {
  text: React.PropTypes.string,
};
