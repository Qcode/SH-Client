import React from 'react';
import PropTypes from 'prop-types';
import ChancellorSelect from './ChancellorSelect';
import ChancellorVote from './ChancellorVote';
import { userPropTypesShape, gameStagePropTypes } from '../objects';

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
      <h1>Game - {props.gameStage}</h1>
      {props.gameStage === 'voteForChancellor' ? (
        <ChancellorVote
          nominee={
            props.primaryUser.isChancellor
              ? props.primaryUser
              : props.users.filter(user => user.isChancellor)[0]
          }
          voteForChancellor={props.voteForChancellor}
        />
      ) : null}
      <h2>You</h2>
      {props.primaryUser.isPresident ? <p>You are president this round.</p> : null}
      {props.primaryUser.isChancellor ? <p>You have been elected chancellor this round.</p> : null}
      {props.primaryUser.isPresident && props.gameStage === 'chooseChancellor' ? (
        <ChancellorSelect users={props.users} submitChancellor={props.submitChancellor} />
      ) : null}
      <p>
        User: {props.primaryUser.username}. Is liberal:{' '}
        {stringClassification(props.primaryUser.isLiberal)}. Is hitler:{' '}
        {stringClassification(props.primaryUser.isHitler)}
      </p>
      <h2>Other Users</h2>
      {props.users.map(user => (
        <p>
          User: {user.username}. Is liberal: {stringClassification(user.isLiberal)}. Is hitler:
          {stringClassification(user.isHitler)}.
          {user.isPresident ? 'This user is president for this round' : null}
          {user.isChancellor ? 'This user is chancellor for this round' : null}
        </p>
      ))}
    </div>
  );
}

Game.propTypes = {
  primaryUser: userPropTypesShape.isRequired,
  users: PropTypes.arrayOf(userPropTypesShape).isRequired,
  submitChancellor: PropTypes.func.isRequired,
  voteForChancellor: PropTypes.func.isRequired,
  gameStage: gameStagePropTypes.isRequired,
};

export default Game;
