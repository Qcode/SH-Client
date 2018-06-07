import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, TextField } from '@material-ui/core';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '' };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameChange(event) {
    this.setState({ username: event.target.value });
  }

  handleSubmit() {
    this.props.connectToServer(this.state.username);
  }

  render() {
    return (
      <div className="container">
        <h1 className="title-text">Join Game</h1>
        <p>Please enter a username</p>
        <div className="container__text">
          <TextField onChange={this.handleUsernameChange} placeholder="My Username" />
        </div>
        <div>
          <Button variant="outlined" color="primary" onClick={this.handleSubmit}>
            Join Game
          </Button>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  connectToServer: PropTypes.func.isRequired,
};

export default Login;
