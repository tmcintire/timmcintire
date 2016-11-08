import React from 'react';

// Shows the individual paragraphs of a blogpost
export const Section = props => (
  <p>{props.text}</p>
);

Section.propTypes = {
  text: React.PropTypes.string,
};
