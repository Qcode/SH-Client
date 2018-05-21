import React from 'react';
import PropTypes from 'prop-types';

function stringClassification(property) {
  switch (typeof property) {
    case 'boolean':
      return property.toString();
    default:
      return 'unknown';
  }
}

function Game(props) {
  return (
    <div>
      <h1>Game</h1>
      <h2>You</h2>
      <p>
        User: {props.primaryUser.username}. Is liberal:{' '}
        {stringClassification(props.primaryUser.isLiberal)}. Is hitler:{' '}
        {stringClassification(props.primaryUser.isHitler)}
      </p>
      <h2>Other Users</h2>
      {props.users.map(user => (
        <p>
          User: {user.username}. Is liberal: {stringClassification(user.isLiberal)}. Is hitler:
          {stringClassification(user.isHitler)}
        </p>
      ))}
    </div>
  );
}

Game.propTypes = {
  primaryUser: PropTypes.shape({
    username: PropTypes.string,
    host: PropTypes.bool,
    isLiberal: PropTypes.bool,
    isHitler: PropTypes.bool,
  }).isRequired,
  users: PropTypes.arrayOf(PropTypes.shape({
    username: PropTypes.string,
    host: PropTypes.bool,
    isLiberal: PropTypes.bool,
    isHitler: PropTypes.bool,
  })).isRequired,
};

export default Game;
