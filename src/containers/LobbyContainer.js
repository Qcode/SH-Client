import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Lobby from '../components/Lobby';

function LobbyContainer(props) {
  return <Lobby users={props.users} />;
}

LobbyContainer.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    username: PropTypes.string,
    host: PropTypes.bool,
  })).isRequired,
};

function mapStateToProps(state) {
  return {
    users: Object.keys(state.users).map(user => state.users[user]),
  };
}

export default connect(mapStateToProps)(LobbyContainer);
