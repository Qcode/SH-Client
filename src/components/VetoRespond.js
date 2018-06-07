import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import './VetoRespond.css';

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
    return (
      <div className="veto-form">
        {!this.state.submitted ? (
          <div>
            <h1 className="title-text">Veto Request</h1>
            <p>You have received a veto request from your chancellor</p>
            <p>Please use one of the following buttons to approve or deny the veto</p>
            <div className="veto-respond-button-container">
              <Button variant="outlined" color="primary" onClick={() => this.onSubmit(true)}>
                Approve
              </Button>
              <Button variant="outlined" color="primary" onClick={() => this.onSubmit(false)}>
                Deny
              </Button>
            </div>
          </div>
        ) : (
          <p>You have responded to the veto request.</p>
        )}
      </div>
    );
  }
}

VetoRespond.propTypes = {
  respondVetoRequest: PropTypes.func.isRequired,
};

export default VetoRespond;
