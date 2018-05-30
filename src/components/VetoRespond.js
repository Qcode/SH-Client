import React, { Component } from 'react';
import PropTypes from 'prop-types';

class VetoRespond extends Component {
  constructor(props) {
    super(props);

    this.state = { submitted: false };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(decision) {
    this.setState({ submitted: true });
    this.props.respondVetoRequest(decision);
  }

  render() {
    if (!this.state.submitted) {
      return (
        <div>
          <p>You have received a veto request from your chancellor</p>
          <p>Please use one of the following buttons to approve or deny the veto</p>
          <button onClick={() => this.onSubmit(true)}>Approve</button>
          <button onClick={() => this.onSubmit(false)}>Deny</button>
        </div>
      );
    }
    return <p>You have responded to the veto request.</p>;
  }
}

VetoRespond.propTypes = {
  respondVetoRequest: PropTypes.func.isRequired,
};

export default VetoRespond;
