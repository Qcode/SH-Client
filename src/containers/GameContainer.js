import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Game from '../components/Game';
import { submitChancellor, voteForChancellor, submitDiscardCard } from '../api';
import { userPropTypesShape, gameStagePropTypes } from '../objects';

function GameContainer(props) {
  return (
    <Game
      gameStage={props.gameStage}
      submitChancellor={submitChancellor}
      submitDiscardCard={submitDiscardCard}
      voteForChancellor={voteForChancellor}
      primaryUser={props.primaryUser}
      users={props.users}
      score={props.score}
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
    score: state.score,
  };
}

GameContainer.propTypes = {
  primaryUser: userPropTypesShape.isRequired,
  users: PropTypes.arrayOf(userPropTypesShape).isRequired,
  gameStage: gameStagePropTypes.isRequired,
  score: PropTypes.shape({ liberal: PropTypes.number, fascist: PropTypes.number }),
};

GameContainer.defaultProps = {
  score: { liberal: 0, fascist: 0 },
};

export default connect(mapStateToProps)(GameContainer);
