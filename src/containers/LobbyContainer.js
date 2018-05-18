import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Lobby from '../components/Lobby';

function LobbyContainer(props) {
  return <Lobby primaryUser={props.primaryUser} users={props.users} />;
}

LobbyContainer.propTypes = {
  primaryUser: PropTypes.shape({
    username: PropTypes.string,
    host: PropTypes.bool,
  }).isRequired,
  users: PropTypes.arrayOf(PropTypes.shape({
    username: PropTypes.string,
    host: PropTypes.bool,
  })).isRequired,
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
