import React from 'react';
import PropTypes from 'prop-types';
import ChancellorVote from './ChancellorVote';
import CardSelect from './CardSelect';
import FascistPower from './FascistPower';
import VetoForm from './VetoForm';
import VetoRespond from './VetoRespond';
import Memo from './Memo';
import Score from './Score';
import UserDisplay from './UserDisplay';
import NominateChancellor from './NominateChancellor';
import { userPropTypesShape, gameStagePropTypes } from '../objects';
import './Game.css';
import { getGameSize } from '../utils';

function Game(props) {
  return (
    <div className="game">
      {props.primaryUser.isPresident &&
        props.gameStage === 'chooseChancellor' && (
          <NominateChancellor submitChancellor={props.submitChancellor} users={props.users} />
        )}
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
      {((props.gameStage === 'presidentPolicySelect' && props.primaryUser.isPresident) ||
        (props.gameStage === 'chancellorPolicySelect' && props.primaryUser.isChancellor)) &&
      props.primaryUser.cards ? (
        <CardSelect
          gameStage={props.gameStage}
          submitDiscardCard={props.submitDiscardCard}
          cards={props.primaryUser.cards}
        />
      ) : null}
      <div className="game-board">
        <Score
          liberal={props.score.liberal}
          fascist={props.score.fascist}
          failedGovernments={props.failedGovernments}
          gameSize={getGameSize(props.users.length + 1)}
        />
        <UserDisplay primaryUser={props.primaryUser} users={props.users} />
      </div>
      {props.memos.length > 0 ? (
        <div>
          <h2>Memos: </h2>
          <Memo dismissMemo={props.dismissMemo} memo={props.memos[0]} />
        </div>
      ) : null}
      {props.gameStage === 'fascistPower' && props.primaryUser.isPresident ? (
        <FascistPower
          enactFascistPower={props.enactFascistPower}
          type={props.fascistPower}
          info={props.fascistInfo}
          users={props.users}
        />
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
