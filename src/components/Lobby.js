import React from 'react';
import PropTypes from 'prop-types';

function Lobby(props) {
  return (
    <div>
      <h1>Lobby</h1>
      {props.users.map(user => (
        <p>
          User - {user.username}. Is Host: {user.host.toString()}
        </p>
      ))}
    </div>
  );
}

Lobby.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    username: PropTypes.string,
    host: PropTypes.bool,
  })).isRequired,
};

export default Lobby;
