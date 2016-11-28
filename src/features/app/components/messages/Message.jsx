import React from 'react';

export const Message = props => (
  <div className={`message-div ${props.read}`} onClick={() => props.updateStatus(props.id)}>
    <p><strong>Name: </strong>{props.name}</p>
    <p><strong>Email: </strong> {props.email} </p>
    <p><strong>Message: </strong>{props.message}</p>
  </div>
);

Message.propTypes = {
  name: React.PropTypes.string,
  email: React.PropTypes.string,
  message: React.PropTypes.string,
  read: React.PropTypes.string,
};
