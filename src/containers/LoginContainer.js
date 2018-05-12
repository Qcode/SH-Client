import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { connectToServer } from '../api';
import Login from '../components/Login';

function LoginContainer(props) {
  return <Login connectToServer={props.connectToServer} />;
}

LoginContainer.propTypes = {
  connectToServer: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      connectToServer,
    },
    dispatch,
  );
}

export default connect(null, mapDispatchToProps)(LoginContainer);
