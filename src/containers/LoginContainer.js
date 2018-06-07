import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { connectToServer } from '../api';
import { LOGIN_ERROR } from '../reducers/eventTypes';
import Login from '../components/Login';

function LoginContainer(props) {
  return (
    <Login
      rejectUsername={props.rejectUsername}
      loginError={props.loginError}
      connectToServer={props.connectToServer}
    />
  );
}

LoginContainer.propTypes = {
  connectToServer: PropTypes.func.isRequired,
  loginError: PropTypes.string,
  rejectUsername: PropTypes.func.isRequired,
};

LoginContainer.defaultProps = {
  loginError: '',
};

function mapStateToProps(state) {
  return {
    loginError: state.loginError,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      connectToServer,
      rejectUsername: error => ({
        type: LOGIN_ERROR,
        error,
      }),
    },
    dispatch,
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
