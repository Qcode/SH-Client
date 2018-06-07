import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import UserSelect from './UserSelect';
import { userPropTypesShape } from '../objects';
import images from '../images';

function FascistPower(props) {
  const subtitles = {
    cardPeek: 'These are the next three cards in the draw pile.',
    kill: 'Choose a player to execute.',
    inspect: 'Choose a player to inspect their party.',
    election: 'Choose a player to be the next President.',
  };

  const altOptions = { liberal: 'Liberal policy', fascist: 'Fascist policy' };

  const forms = {
    cardPeek: (
      <div>
        <div>
          {props.info &&
            props.info.map(card => (
              <div className="card-display-card-container">
                <img
                  alt={altOptions[card]}
                  className="card-display-card-image"
                  src={card === 'liberal' ? images.policies.liberal : images.policies.fascist}
                />
              </div>
            ))}
        </div>
        <Button color="primary" variant="outlined" onClick={() => props.enactFascistPower()}>
          Understood, Continue Game
        </Button>
      </div>
    ),
    kill: (
      <UserSelect
        submitPrefix="I formally execute"
        users={props.users}
        onSubmit={props.enactFascistPower}
      />
    ),
    inspect: (
      <UserSelect
        submitPrefix="Inspect the party membership of"
        users={props.users}
        onSubmit={props.enactFascistPower}
      />
    ),
    election: (
      <UserSelect
        submitPrefix="Elect"
        submitSuffix="as President in a special election"
        users={props.users}
        onSubmit={props.enactFascistPower}
      />
    ),
  };

  return (
    <div>
      <h1 className="title-text">Fascist Power</h1>
      <p>{subtitles[props.type]}</p>
      {forms[props.type]}
    </div>
  );
}

FascistPower.propTypes = {
  type: PropTypes.oneOf(['cardPeek']).isRequired,
  info: PropTypes.arrayOf(PropTypes.oneOf(['liberal', 'fascist'])).isRequired,
  enactFascistPower: PropTypes.func.isRequired,
  users: PropTypes.arrayOf(userPropTypesShape).isRequired,
};

export default FascistPower;
