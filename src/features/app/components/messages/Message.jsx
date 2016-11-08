import React from 'react';

export const Message = props => (
  <div>
    <p><strong>Name: </strong>{props.name}</p>
    <p><strong>Email: </strong> {props.email} </p>
    <p><strong>Message: </strong>{props.message}</p>
  </div>
);

Message.propTypes = {
  name: React.PropTypes.string,
  email: React.PropTypes.string,
  message: React.PropTypes.string,
};
