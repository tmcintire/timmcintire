import React from 'react';
import * as api from '../../../data/api';

export class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      success_message: '',
    };
  }
  sendMessage() {
    const message = {
      name: this.name.value,
      email: this.email.value,
      message: this.message.value,
    };
    this.setState({
      success_message: 'Sent!',
    });
    api.sendMessage(message);
    this.name.value = '';
    this.email.value = '';
    this.message.value = '';
  }
  render() {
    return (
      <div className="page-container">
        <h1 className="text-center">Contact Me</h1>
        <p className="text-center">If you&apos;re interested in working with me.
          Submit a message here or email me directly at
          <a href="mailto:&#116;&#105;&#109;&#064;&#116;&#105;&#109;&#109;&#099;&#105;&#110;&#116;&#105;&#114;&#101;&#046;&#111;&#114;&#103;"> tim@timmcintire.org</a>
        </p>
        <hr />

        <input className="form-control" type="text" ref={(ref) => { this.name = ref; }} placeholder="Name" />
        <input className="form-control" type="text" ref={(ref) => { this.email = ref; }} placeholder="Email" />
        <textarea className="form-control" rows="5" ref={(ref) => { this.message = ref; }} placeholder="Message" />
        <br />
        <button className="btn btn-lg btn-success" onClick={() => this.sendMessage()}>Send</button>
        <p className="success-message">{this.state.success_message}</p>
      </div>
    );
  }
}
