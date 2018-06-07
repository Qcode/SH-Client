import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import GameOver from '../components/GameOver';
import { userPropTypesShape, memoPropTypesShape } from '../objects';
import { DISMISS_MEMO } from '../reducers/eventTypes';

function GameOverContainer(props) {
  return (
    <GameOver
      memos={props.memos}
      primaryUser={props.primaryUser}
      users={props.users}
      reason={props.reason}
      dismissMemo={props.dismissMemo}
    />
  );
}

function mapStateToProps(state) {
  return {
    reason: state.gameOverReason,
    primaryUser: state.users[state.primaryUserId],
    users: Object.keys(state.users)
      .filter(key => key !== state.primaryUserId)
      .map(user => state.users[user]),
    memos: state.memoQueue,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      dismissMemo: () => ({ type: DISMISS_MEMO }),
    },
    dispatch,
  );
}

GameOverContainer.propTypes = {
  reason: PropTypes.oneOf(['LIBERALS_WIN', 'HITLER_SHOT', 'FASCISTS_WIN', 'HITLER_ELECTED'])
    .isRequired,
  primaryUser: userPropTypesShape.isRequired,
  users: PropTypes.arrayOf(userPropTypesShape).isRequired,
  memos: PropTypes.arrayOf(memoPropTypesShape),
  dismissMemo: PropTypes.func.isRequired,
};

GameOverContainer.defaultProps = {
  memos: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(GameOverContainer);
