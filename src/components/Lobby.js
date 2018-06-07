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
    <div className="container" style={{ 'text-align': 'center' }}>
      <h1 className="title-text">Lobby</h1>
      <h2>Users:</h2>
      <p>You {props.primaryUser.host && ' - Host'}</p>
      {props.users.map(user => (
        <p>
          {user.username} {user.host && ' - Host'}
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
