import React from 'react';
import PropTypes from 'prop-types';

function Lobby(props) {
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
    </div>
  );
}

Lobby.propTypes = {
  primaryUser: PropTypes.shape({
    username: PropTypes.string,
    host: PropTypes.bool,
  }).isRequired,
  users: PropTypes.arrayOf(PropTypes.shape({
    username: PropTypes.string,
    host: PropTypes.bool,
  })).isRequired,
};

export default Lobby;
