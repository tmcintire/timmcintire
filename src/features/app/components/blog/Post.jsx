import React from 'react';
import { Link } from 'react-router';

export const Post = (props) => {
  const { date } = props;
  const formattedDate = date.split(' ').slice(0, 4).join(' ');
  return (
    <div>
      <p>{formattedDate} | <Link to={`blog/${props.id}`}>{props.title}</Link></p>
    </div>
  );
};

Post.propTypes = {
  id: React.PropTypes.string,
  title: React.PropTypes.string,
  date: React.PropTypes.string,
};
