import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Game from '../components/Game';
import { submitChancellor, voteForChancellor } from '../api';
import { userPropTypesShape, gameStagePropTypes } from '../objects';

function GameContainer(props) {
  return (
    <Game
      gameStage={props.gameStage}
      submitChancellor={submitChancellor}
      voteForChancellor={voteForChancellor}
      primaryUser={props.primaryUser}
      users={props.users}
    />
  );
}

function mapStateToProps(state) {
  return {
    primaryUser: state.users[state.primaryUserId],
    users: Object.keys(state.users)
      .filter(key => key !== state.primaryUserId)
      .map(user => state.users[user]),
    gameStage: state.gameStage,
  };
}

GameContainer.propTypes = {
  primaryUser: userPropTypesShape.isRequired,
  users: PropTypes.arrayOf(userPropTypesShape).isRequired,
  gameStage: gameStagePropTypes.isRequired,
};

export default connect(mapStateToProps)(GameContainer);
