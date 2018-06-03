import React from 'react';
import PropTypes from 'prop-types';
import UserCard from './UserCard';
import { userPropTypesShape } from '../objects';
import { getRoleFromUser, voteToString } from '../utils';
import './UserDisplay.css';

function UserDisplay(props) {
  return (
    <div className="user-display">
      <UserCard
        role={getRoleFromUser(props.primaryUser)}
        roleImage={props.primaryUser.roleImage}
        username="You"
        isPresident={props.primaryUser.isPresident}
        isChancellor={props.primaryUser.isChancellor}
        voteCast={voteToString(props.primaryUser.voteCast)}
      />
      {props.users.map(user => (
        <UserCard
          role={getRoleFromUser(user)}
          roleImage={user.roleImage}
          username={user.username}
          isPresident={user.isPresident}
          isChancellor={user.isChancellor}
          voteCast={voteToString(user.voteCast)}
        />
      ))}
    </div>
  );
}

UserDisplay.propTypes = {
  primaryUser: userPropTypesShape.isRequired,
  users: PropTypes.arrayOf(userPropTypesShape).isRequired,
};

export default UserDisplay;
