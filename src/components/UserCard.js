import React from 'react';
import PropTypes from 'prop-types';
import images from '../images';
import './UserCard.css';

function UserCard(props) {
  const getImageFromRole = {
    liberal: () => images.roles.liberal[props.roleImage],
    fascist: () => images.roles.fascist[props.roleImage],
    unknown: () => images.roles.unknown,
    hitler: () => images.roles.hitler,
  };

  const getAltFromRole = {
    liberal: 'Liberal role image',
    fascist: 'Fascist role image',
    unknown: 'Unknown role image',
    hitler: 'Hitler role image',
  };

  return (
    <div className="user-card-container">
      <img
        className="user-card-image"
        alt={getAltFromRole[props.role]}
        src={getImageFromRole[props.role]()}
      />
      <div className="user-card-text-container">
        <p>{props.voteCast !== 'uncast' && props.voteCast}</p>
        {props.isPresident && <p>President</p>}
        {props.isChancellor && <p>Chancellor</p>}
        <p>{props.username}</p>
      </div>
    </div>
  );
}

UserCard.propTypes = {
  role: PropTypes.oneOf(['liberal', 'fascist', 'hitler', 'unknown']).isRequired,
  roleImage: PropTypes.number,
  voteCast: PropTypes.oneOf(['Ja!', 'Nein!', 'uncast']),
  isPresident: PropTypes.bool,
  isChancellor: PropTypes.bool,
  username: PropTypes.string.isRequired,
};

UserCard.defaultProps = {
  roleImage: 1,
  voteCast: 'uncast',
  isPresident: false,
  isChancellor: false,
};

export default UserCard;
