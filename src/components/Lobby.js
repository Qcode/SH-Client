import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { userPropTypesShape } from '../objects';

function Lobby(props) {
  const primaryUserForm =
    Object.keys(props.users).length >= 4 ? (
      <Button variant="outlined" color="primary" onClick={props.startGame}>
        Start Game
      </Button>
    ) : (
      <p>Need at least 5 users to start game</p>
    );
  return (
    <div>
      <h1>Lobby</h1>
      <h2>You:</h2>
      <p>
        Name - {props.primaryUser.username}. Is Host: {props.primaryUser.host.toString()}
      </p>
      <h2>Other users</h2>
      {props.users.map(user => (
        <p>
          Name - {user.username}. Is Host: {user.host.toString()}
        </p>
      ))}
      {props.primaryUser.host ? primaryUserForm : <p>Waiting for host to start game...</p>}
    </div>
  );
}

Lobby.propTypes = {
  primaryUser: userPropTypesShape.isRequired,
  users: PropTypes.arrayOf(userPropTypesShape).isRequired,
  startGame: PropTypes.func.isRequired,
};

export default Lobby;
