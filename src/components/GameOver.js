import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import UserDisplay from './UserDisplay';
import { userPropTypesShape, memoPropTypesShape } from '../objects';
import Memo from './Memo';
import './GameOver.css';

function GameOver(props) {
  const titles = {
    LIBERALS_WIN: 'Liberal Victory',
    HITLER_SHOT: 'Liberal Victory',
    FASCISTS_WIN: 'Fascist Victory',
    HITLER_ELECTED: 'Fascist Victory',
  };

  const explanations = {
    LIBERALS_WIN: 'Liberals win by successfully passing 5 liberal policies.',
    HITLER_SHOT: 'Liberals win by executing Hitler.',
    FASCISTS_WIN: 'Fascists win by successfully passing 6 fascist policies.',
    HITLER_ELECTED:
      'Fascists win by electing Hitler as chancellor after 3 fascist policies had been passed',
  };

  return (
    <div className="game-over">
      <h1 className="title-text">{titles[props.reason]}</h1>
      <p>{explanations[props.reason]}</p>
      <UserDisplay center primaryUser={props.primaryUser} users={props.users} />
      {props.primaryUser.host && (
        <div className="game-over-button-container">
          <Button
            style={{ 'margin-left': '10px', 'margin-right': '10px' }}
            variant="outlined"
            color="primary"
            onClick={props.startGame}
          >
            Restart Game with Same Players
          </Button>
          <Button
            style={{ 'margin-left': '10px', 'margin-right': '10px' }}
            variant="outlined"
            color="primary"
            onClick={props.closeGame}
          >
            New Game with Different Players
          </Button>
        </div>
      )}

      {props.memos.length > 0 ? (
        <Memo
          users={props.users.concat([props.primaryUser])}
          dismissMemo={props.dismissMemo}
          memo={props.memos[0]}
        />
      ) : null}
    </div>
  );
}

GameOver.propTypes = {
  reason: PropTypes.oneOf(['LIBERALS_WIN', 'HITLER_SHOT', 'FASCISTS_WIN', 'HITLER_ELECTED'])
    .isRequired,
  primaryUser: userPropTypesShape.isRequired,
  users: PropTypes.arrayOf(userPropTypesShape).isRequired,
  dismissMemo: PropTypes.func.isRequired,
  memos: PropTypes.arrayOf(memoPropTypesShape),
  startGame: PropTypes.func.isRequired,
  closeGame: PropTypes.func.isRequired,
};

GameOver.defaultProps = {
  memos: [],
};

export default GameOver;
