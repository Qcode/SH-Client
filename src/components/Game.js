import React from 'react';
import PropTypes from 'prop-types';
import UserSelect from './UserSelect';
import ChancellorVote from './ChancellorVote';
import CardSelect from './CardSelect';
import FascistPower from './FascistPower';
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
      <h2>Score</h2>
      <p>Liberals: {props.score.liberal}</p>
      <p>Fascists: {props.score.fascist}</p>
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
      {props.gameStage === 'fascistPower' && props.primaryUser.isPresident ? (
        <FascistPower
          enactFascistPower={props.enactFascistPower}
          type={props.fascistPower}
          info={props.fascistInfo}
          users={props.users}
        />
      ) : null}
      <h2>You</h2>
      {props.primaryUser.isPresident ? <p>You are president this round.</p> : null}
      {props.primaryUser.isChancellor ? <p>You have been elected chancellor this round.</p> : null}
      {props.primaryUser.isPresident && props.gameStage === 'chooseChancellor' ? (
        <div>
          <p>Elect a chancellor using the form below.</p>
          <UserSelect
            submitText="Select Chancellor"
            users={props.users}
            onSubmit={props.submitChancellor}
          />
        </div>
      ) : null}
      {((props.gameStage === 'presidentPolicySelect' && props.primaryUser.isPresident) ||
        (props.gameStage === 'chancellorPolicySelect' && props.primaryUser.isChancellor)) &&
      props.primaryUser.cards ? (
        <CardSelect submitDiscardCard={props.submitDiscardCard} cards={props.primaryUser.cards} />
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
  submitDiscardCard: PropTypes.func.isRequired,
  score: PropTypes.shape({ liberal: PropTypes.number, fascist: PropTypes.number }),
  enactFascistPower: PropTypes.func.isRequired,
  fascistPower: PropTypes.oneOf(['cardPeek']).isRequired,
  fascistInfo: PropTypes.arrayOf(PropTypes.oneOf(['liberal', 'fascist'])).isRequired,
};

Game.defaultProps = {
  score: { liberal: 0, fascist: 0 },
};

export default Game;
