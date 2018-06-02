import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import UserSelect from './UserSelect';
import ChancellorVote from './ChancellorVote';
import CardSelect from './CardSelect';
import FascistPower from './FascistPower';
import VetoForm from './VetoForm';
import VetoRespond from './VetoRespond';
import Memo from './Memo';
import Score from './Score';
import { userPropTypesShape, gameStagePropTypes } from '../objects';

function stringClassification(property) {
  switch (typeof property) {
    case 'boolean':
      return property.toString();
    default:
      return 'unknown';
  }
}

function getGameSize(userCount) {
  return {
    1: 'small',
    5: 'small',
    6: 'small',
    7: 'medium',
    8: 'medium',
    9: 'large',
    10: 'large',
  }[userCount];
}

function Game(props) {
  return (
    <div>
      <Score
        liberal={props.score.liberal}
        fascist={props.score.fascist}
        failedGovernments={props.failedGovernments}
        gameSize={getGameSize(props.users.length + 1)}
      />
      {props.memos.length > 0 ? (
        <div>
          <h2>Memos: </h2>
          <Memo dismissMemo={props.dismissMemo} memo={props.memos[0]} />
        </div>
      ) : null}
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
            submitText="Nominate Chancellor"
            users={props.users}
            onSubmit={props.submitChancellor}
            optionMapFunction={user =>
              (!user.isTermLimited ? (
                <MenuItem value={user.id}>{user.username}</MenuItem>
              ) : (
                <MenuItem disabled value={user.id}>
                  {user.username} - term limited
                </MenuItem>
              ))
            }
            getFirstUser={users => users.find(user => !user.isTermLimited)}
          />
        </div>
      ) : null}
      {props.gameStage === 'chancellorPolicySelect' &&
        props.primaryUser.isPresident &&
        props.users.filter(user => user.isChancellor)[0].usedVeto && (
          <VetoRespond respondVetoRequest={props.respondVetoRequest} />
        )}
      {props.gameStage === 'chancellorPolicySelect' &&
      props.primaryUser.isChancellor &&
      props.score.fascist === 5 ? (
        <VetoForm submitVetoRequest={props.submitVetoRequest} />
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
  memos: PropTypes.arrayOf(PropTypes.string),
  dismissMemo: PropTypes.func.isRequired,
  failedGovernments: PropTypes.number,
  submitVetoRequest: PropTypes.func.isRequired,
  respondVetoRequest: PropTypes.func.isRequired,
};

Game.defaultProps = {
  score: { liberal: 0, fascist: 0 },
  memos: [],
  failedGovernments: 0,
};

export default Game;
