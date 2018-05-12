import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

  handleSubmit(event) {
    this.props.connectToServer(this.state.username);
    event.preventDefault();
  }

  render() {
    return (
      <div className="game-container">
        <h1>Join Game</h1>
        <p>Please enter a username</p>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleUsernameChange} id="username" type="text" />
          <br />
          <input type="submit" value="Join Game" />
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  connectToServer: PropTypes.func.isRequired,
};

export default Login;
