import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GameOver from '../components/GameOver';
import { userPropTypesShape } from '../objects';

function GameOverContainer(props) {
  return <GameOver primaryUser={props.primaryUser} users={props.users} reason={props.reason} />;
}

function mapStateToProps(state) {
  return {
    reason: state.gameOverReason,
    primaryUser: state.users[state.primaryUserId],
    users: Object.keys(state.users)
      .filter(key => key !== state.primaryUserId)
      .map(user => state.users[user]),
  };
}

GameOverContainer.propTypes = {
  reason: PropTypes.oneOf(['LIBERALS_WIN', 'HITLER_SHOT', 'FASCISTS_WIN', 'HITLER_ELECTED'])
    .isRequired,
  primaryUser: userPropTypesShape.isRequired,
  users: PropTypes.arrayOf(userPropTypesShape).isRequired,
};

export default connect(mapStateToProps)(GameOverContainer);
