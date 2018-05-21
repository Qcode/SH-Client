import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Game from '../components/Game';

function GameContainer(props) {
  return <Game primaryUser={props.primaryUser} users={props.users} />;
}

function mapStateToProps(state) {
  return {
    primaryUser: state.users[state.primaryUserId],
    users: Object.keys(state.users)
      .filter(key => key !== state.primaryUserId)
      .map(user => state.users[user]),
  };
}

GameContainer.propTypes = {
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

export default connect(mapStateToProps)(GameContainer);
