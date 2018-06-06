import React from 'react';
import PropTypes from 'prop-types';
import UserCard from './UserCard';
import { userPropTypesShape } from '../objects';
import { getRoleFromUser, voteToString } from '../utils';
import './UserDisplay.css';

function UserDisplay(props) {
  return (
    <div className={!props.center ? 'user-display' : 'user-display-center'}>
      <UserCard
        role={getRoleFromUser(props.primaryUser)}
        roleImage={props.primaryUser.roleImage}
        username="You"
        isPresident={props.primaryUser.isPresident}
        isChancellor={props.primaryUser.isChancellor}
        voteCast={voteToString(props.primaryUser.voteCast)}
        isDead={props.primaryUser.isDead}
      />
      {props.users.map(user => (
        <UserCard
          role={getRoleFromUser(user)}
          roleImage={user.roleImage}
          username={user.username}
          isPresident={user.isPresident}
          isChancellor={user.isChancellor}
          voteCast={voteToString(user.voteCast)}
          isDead={user.isDead}
        />
      ))}
    </div>
  );
}

UserDisplay.propTypes = {
  primaryUser: userPropTypesShape.isRequired,
  users: PropTypes.arrayOf(userPropTypesShape).isRequired,
  center: PropTypes.bool,
};

UserDisplay.defaultProps = {
  center: false,
};

export default UserDisplay;
