/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import images from '../images';
import './Score.css';

function Score(props) {
  return (
    <div className="score-container">
      <div className="score-board-container">
        <img
          alt="Fasicst Board"
          className="score-fascist-board score-board"
          src={images.fascistBoards[props.gameSize]}
        />
        {[...Array(props.fascist)].map((_, index) => (
          <img
            alt="Fascist Policy"
            key={index}
            className={`score-card score-fascist-card-${index + 1}`}
            src={images.policies.fascist}
          />
        ))}
      </div>
      <div className="score-board-container">
        <img
          alt="Liberal Board"
          className="score-liberal-board score-board"
          src={images.liberalBoards[props.failedGovernments]}
        />
        {[...Array(props.liberal)].map((_, index) => (
          <img
            alt="Liberal Policy"
            key={index}
            className={`score-card score-liberal-card-${index + 1}`}
            src={images.policies.liberal}
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
