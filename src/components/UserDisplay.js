import React from 'react';
import PropTypes from 'prop-types';
import UserCard from './UserCard';
import { userPropTypesShape } from '../objects';
import './UserDisplay.css';

function UserDisplay(props) {
  const determineRole = (user) => {
    if (user.isLiberal) {
      return 'liberal';
    }
    if (typeof user.isLiberal === 'undefined') {
      return 'unknown';
    }
    if (user.isHitler) {
      return 'hitler';
    }
    return 'fascist';
  };

  const voteToString = (vote) => {
    if (vote === 1) {
      return 'Ja!';
    } else if (vote === 0) {
      return 'Nein!';
    }
    return vote;
  };

  return (
    <div className="user-display">
      <UserCard
        role={determineRole(props.primaryUser)}
        roleImage={props.primaryUser.roleImage}
        username="You"
        isPresident={props.primaryUser.isPresident}
        isChancellor={props.primaryUser.isChancellor}
        voteCast={voteToString(props.primaryUser.voteCast)}
      />
      {props.users.map(user => (
        <UserCard
          role={determineRole(user)}
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
