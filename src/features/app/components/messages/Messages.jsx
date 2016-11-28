import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as api from '../../../data/api';
import { Message } from './Message';

const Loading = require('react-loading-animation');

@connect(store => ({
  data: store.data.data,
  messages: store.data.messages,
}))
export class Messages extends React.Component {
  constructor() {
    super();
    api.fetchMessages();
  }
  updateStatus = (id) => {
    api.changeStatusToRead(id);
  }
  render() {
    const showMessages = () => {
      if (this.props.messages.loading === true) {
        return <Loading />;
      }
      if (this.props.messages.loading === false) {
        const { messages } = this.props.messages;
        return Object.keys(messages).map(message => (
          <Message
            updateStatus={id => this.updateStatus(id)}
            key={message}
            id={message}
            {...messages[message]}
          />
        ));
      }
      return true;
    };
    return (
      <div className="main-container">
        <h1 className="text-center">Messages</h1>
        <Link to="edit"><button className="btn btn-primary back-btn">Back</button></Link>
        {showMessages()}
      </div>
    );
  }
}

Messages.propTypes = {
  messages: React.PropTypes.shape({
    loading: React.PropTypes.bool,
    messages: React.PropTypes.object, // eslint-disable-line
  }),
};
