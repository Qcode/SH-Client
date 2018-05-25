import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LoginContainer from './LoginContainer';
import LobbyContainer from './LobbyContainer';
import GameContainer from './GameContainer';
import GameOverContainer from './GameOverContainer';

function App(props) {
  const views = {
    lobby: LobbyContainer,
    game: GameContainer,
    gameOver: GameOverContainer,
    login: LoginContainer,
  };

  return <div className="App">{React.createElement(views[props.gameState])}</div>;
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
