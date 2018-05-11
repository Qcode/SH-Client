import React, { Component } from 'react';
import { connectToServer } from './api';

class GameContainer extends Component {
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
    connectToServer(this.state.username);
    event.preventDefault();
  }

  render() {
    return (
      <div className="game-container">
        <h1>Lobby</h1>
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

export default GameContainer;
