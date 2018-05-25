import React from 'react';
import PropTypes from 'prop-types';

function GameOver(props) {
  const titles = {
    LIBERALS_WIN: 'Liberals Win',
    HITLER_SHOT: 'Liberals Win',
    FASCISTS_WIN: 'Fascists Win',
    HITLER_ELECTED: 'Fascists Win',
  };

  const explanations = {
    LIBERALS_WIN: '5 liberal policies were passed.',
    HITLER_SHOT: 'Hitler was shot.',
    FASCISTS_WIN: '6 fascist policies were passed.',
    HITLER_ELECTED: 'Hitler was elected as chancellor after 3 fascist policies had been passed',
  };

  return (
    <div>
      <h1>Game Over</h1>
      <p>{titles[props.reason]}</p>
      <p>{explanations[props.reason]}</p>
    </div>
  );
}

GameOver.propTypes = {
  reason: PropTypes.oneOf(['LIBERALS_WIN', 'HITLER_SHOT', 'FASCISTS_WIN', 'HITLER_ELECTED'])
    .isRequired,
};

export default GameOver;
