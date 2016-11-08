import React from 'react';
import { connect } from 'react-redux';
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
  render() {
    const showMessages = () => {
      if (this.props.messages.loading === true) {
        return <Loading />;
      }
      if (this.props.messages.loading === false) {
        const { messages } = this.props.messages;
        return Object.keys(messages).map(message => (
          <div>
            <Message key={message} id={message} {...messages[message]} />
            <hr />
          </div>
        ));
      }
      return true;
    };
    return (
      <div className="main-container">
        <h1 className="text-center">Messages</h1>
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
