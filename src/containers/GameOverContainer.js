import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GameOver from '../components/GameOver';

function GameOverContainer(props) {
  return <GameOver reason={props.reason} />;
}

GameOverContainer.propTypes = {
  reason: PropTypes.oneOf(['LIBERALS_WIN', 'HITLER_SHOT', 'FASCISTS_WIN', 'HITLER_ELECTED'])
    .isRequired,
};

function mapStateToProps(state) {
  return {
    reason: state.gameOverReason,
  };
}

export default connect(mapStateToProps)(GameOverContainer);
