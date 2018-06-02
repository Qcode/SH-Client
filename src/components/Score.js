/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import liberalBoard0 from '../assets/liberal-board-0.png';
import liberalBoard1 from '../assets/liberal-board-1.png';
import liberalBoard2 from '../assets/liberal-board-2.png';
import liberalBoard3 from '../assets/liberal-board-3.png';
import fascistBoardSmall from '../assets/fascist-board-small.png';
import fascistBoardMedium from '../assets/fascist-board-medium.png';
import fascistBoardLarge from '../assets/fascist-board-large.png';
import liberalPolicy from '../assets/liberal-policy.png';
import fascistPolicy from '../assets/fascist-policy.png';
import './Score.css';

function Score(props) {
  const fascistBoardMap = {
    small: fascistBoardSmall,
    medium: fascistBoardMedium,
    large: fascistBoardLarge,
  };

  const liberalBoardMap = {
    0: liberalBoard0,
    1: liberalBoard1,
    2: liberalBoard2,
    3: liberalBoard3,
  };

  return (
    <div className="score-container">
      <div className="score-board-container">
        <img
          alt="Fasicst Board"
          className="score-fascist-board score-board"
          src={fascistBoardMap[props.gameSize]}
        />
        {[...Array(props.fascist)].map((_, index) => (
          <img
            alt="Fascist Policy"
            key={index}
            className={`score-card score-fascist-card-${index + 1}`}
            src={fascistPolicy}
          />
        ))}
      </div>
      <div className="score-board-container">
        <img
          alt="Liberal Board"
          className="score-liberal-board score-board"
          src={liberalBoardMap[props.failedGovernments]}
        />
        {[...Array(props.liberal)].map((_, index) => (
          <img
            alt="Liberal Policy"
            key={index}
            className={`score-card score-liberal-card-${index + 1}`}
            src={liberalPolicy}
          />
        ))}
      </div>
    </div>
  );
}

Score.propTypes = {
  liberal: PropTypes.number,
  fascist: PropTypes.number,
  gameSize: PropTypes.oneOf(['small', 'medium', 'large']),
  failedGovernments: PropTypes.number,
};

Score.defaultProps = {
  liberal: 0,
  fascist: 0,
  gameSize: 'small',
  failedGovernments: 0,
};

export default Score;
