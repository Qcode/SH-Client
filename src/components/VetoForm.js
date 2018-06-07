import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

class VetoForm extends Component {
  constructor(props) {
    super(props);

    this.state = { submitted: false };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    this.setState({ submitted: true });
    this.props.submitVetoRequest();
  }

  render() {
    return (
      <div className="veto-form">
        <h1 className="title-text">Veto Power</h1>
        {!this.state.submitted ? (
          <div>
            <p>Since there are 5 fascist policies passed, you have unlocked veto power</p>
            <p>
              If you wish to play neither of these policies, you can request a veto from the sitting
              President
            </p>
            <p>Note that vetoing these policies will count as a failed government</p>
            <Button variant="outlined" color="primary" onClick={this.handleSubmit}>
              Submit Veto Request
            </Button>
          </div>
        ) : (
          <p>You have used your veto request.</p>
        )}
      </div>
    );
  }
}

VetoForm.propTypes = {
  submitVetoRequest: PropTypes.func.isRequired,
};

export default VetoForm;
