import React from 'react';
import PropTypes from 'prop-types';
import './GameOver.css';
import UserDisplay from './UserDisplay';
import { userPropTypesShape } from '../objects';

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
    </div>
  );
}

GameOver.propTypes = {
  reason: PropTypes.oneOf(['LIBERALS_WIN', 'HITLER_SHOT', 'FASCISTS_WIN', 'HITLER_ELECTED'])
    .isRequired,
  primaryUser: userPropTypesShape.isRequired,
  users: PropTypes.arrayOf(userPropTypesShape).isRequired,
};

export default GameOver;
