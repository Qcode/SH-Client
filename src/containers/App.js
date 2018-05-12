import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LoginContainer from './LoginContainer';
import LobbyContainer from './LobbyContainer';

function App(props) {
  let view;
  switch (props.gameState) {
    case 'lobby':
      view = <LobbyContainer />;
      break;
    default:
      view = <LoginContainer />;
      break;
  }
  return <div className="App">{view}</div>;
}

function mapStateToProps(state) {
  return {
    gameState: state.gameState,
  };
}

App.propTypes = {
  gameState: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(App);
