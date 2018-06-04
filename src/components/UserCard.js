import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
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
    <div
      className={classNames('user-card-container', {
        'user-card-container__selected': props.selected,
        'user-card-container__disabled': props.disabled,
      })}
    >
      <img
        className="user-card-image"
        alt={getAltFromRole[props.role]}
        src={getImageFromRole[props.role]()}
      />
      {props.disabled && (
        <div className="user-card-disabled-overlay">
          <p>{props.disabledText}</p>
        </div>
      )}
      <div className="user-card-text-container">
        <p
          className={classNames('user-card-text', {
            'user-card-text__selected': props.selected,
          })}
        >
          {props.voteCast !== 'uncast' && props.voteCast}
        </p>
        {props.isPresident && (
          <p
            className={classNames('user-card-text', {
              'user-card-text__selected': props.selected,
            })}
          >
            President
          </p>
        )}
        {props.isChancellor && (
          <p
            className={classNames('user-card-text', {
              'user-card-text__selected': props.selected,
            })}
          >
            Chancellor
          </p>
        )}
        <p
          className={classNames('user-card-text', {
            'user-card-text__selected': props.selected,
          })}
        >
          {props.username}
        </p>
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
  selected: PropTypes.bool,
  disabledText: PropTypes.string,
  disabled: PropTypes.bool,
};

UserCard.defaultProps = {
  roleImage: 1,
  voteCast: 'uncast',
  isPresident: false,
  isChancellor: false,
  selected: false,
  disabledText: 'Disabled',
  disabled: false,
};

export default UserCard;
