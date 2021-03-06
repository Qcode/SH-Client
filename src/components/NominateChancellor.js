import React from 'react';
import PropTypes from 'prop-types';
import UserSelect from './UserSelect';
import { userPropTypesShape } from '../objects';

function NominateChancellor(props) {
  return (
    <div className="nominate-chancellor">
      <h1 className="title-text">Nominate Chancellor</h1>
      <UserSelect
        submitPrefix="Nominate"
        submitSuffix="as Chancellor"
        users={props.users}
        onSubmit={props.submitChancellor}
        checkDisabled={user => user.isTermLimited || user.isDead}
        disabledText="Term Limited"
        getFirstUser={users => users.find(user => !user.isTermLimited)}
      />
    </div>
  );
}

NominateChancellor.propTypes = {
  submitChancellor: PropTypes.func.isRequired,
  users: PropTypes.arrayOf(userPropTypesShape).isRequired,
};

export default NominateChancellor;
