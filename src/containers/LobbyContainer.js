import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Lobby from '../components/Lobby';
import { startGame } from '../api';
import { userPropTypesShape } from '../objects';

function LobbyContainer(props) {
  return <Lobby startGame={startGame} primaryUser={props.primaryUser} users={props.users} />;
}

LobbyContainer.propTypes = {
  primaryUser: userPropTypesShape.isRequired,
  users: PropTypes.arrayOf(userPropTypesShape).isRequired,
};

function mapStateToProps(state) {
  return {
    primaryUser: state.users[state.primaryUserId],
    users: Object.keys(state.users)
      .filter(key => key !== state.primaryUserId)
      .map(user => state.users[user]),
  };
}

export default connect(mapStateToProps)(LobbyContainer);
