import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Game from '../components/Game';
import { submitChancellor, voteForChancellor, submitDiscardCard, enactFascistPower } from '../api';
import { userPropTypesShape, gameStagePropTypes } from '../objects';

function GameContainer(props) {
  if (props.primaryUser.isDead) {
    return (
      <div>
        <h1>You are dead.</h1>
        <p>You have been executed by the president.</p>
        <p>
          Reminder: it is against the rules to announce your party affiliation after being executed
        </p>
        <p>Please wait until the end of the game to reveal your affiliation. Thank you.</p>
      </div>
    );
  }
  return (
    <Game
      gameStage={props.gameStage}
      submitChancellor={submitChancellor}
      submitDiscardCard={submitDiscardCard}
      voteForChancellor={voteForChancellor}
      enactFascistPower={enactFascistPower}
      primaryUser={props.primaryUser}
      users={props.users}
      score={props.score}
      fascistInfo={props.fascistInfo}
      fascistPower={props.fascistPower}
    />
  );
}

function mapStateToProps(state) {
  return {
    primaryUser: state.users[state.primaryUserId],
    users: Object.keys(state.users)
      .filter(key => key !== state.primaryUserId && !state.users[key].isDead)
      .map(user => state.users[user]),
    gameStage: state.gameStage,
    score: state.score,
    fascistPower: state.fascistPower,
    fascistInfo: state.fascistInfo,
  };
}

GameContainer.propTypes = {
  primaryUser: userPropTypesShape.isRequired,
  users: PropTypes.arrayOf(userPropTypesShape).isRequired,
  gameStage: gameStagePropTypes.isRequired,
  score: PropTypes.shape({ liberal: PropTypes.number, fascist: PropTypes.number }),
  fascistPower: PropTypes.oneOf(['cardPeek']).isRequired,
  fascistInfo: PropTypes.arrayOf(PropTypes.oneOf(['liberal', 'fascist'])).isRequired,
};

GameContainer.defaultProps = {
  score: { liberal: 0, fascist: 0 },
};

export default connect(mapStateToProps)(GameContainer);
