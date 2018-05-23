import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { userPropTypesShape } from '../objects';

class Lobby extends Component {
  constructor(props) {
    super(props);
    this.startGame = this.startGame.bind(this);
  }

  startGame(event) {
    this.props.startGame();
    event.preventDefault();
  }

  render() {
    const primaryUserForm =
      Object.keys(this.props.users).length >= 4 ? (
        <form onSubmit={this.startGame}>
          <input type="submit" value="Start Game" />
        </form>
      ) : (
        <p>Need at least 5 users to start game</p>
      );
    return (
      <div>
        <h1>Lobby</h1>
        <h2>You:</h2>
        <p>
          Name - {this.props.primaryUser.username}. Is Host:{' '}
          {this.props.primaryUser.host.toString()}
        </p>
        <h2>Other users</h2>
        {this.props.users.map(user => (
          <p>
            Name - {user.username}. Is Host: {user.host.toString()}
          </p>
        ))}
        {this.props.primaryUser.host ? primaryUserForm : <p>Waiting for host to start game...</p>}
      </div>
    );
  }
}

Lobby.propTypes = {
  primaryUser: userPropTypesShape.isRequired,
  users: PropTypes.arrayOf(userPropTypesShape).isRequired,
  startGame: PropTypes.func.isRequired,
};

export default Lobby;
