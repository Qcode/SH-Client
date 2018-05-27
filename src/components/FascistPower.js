import React from 'react';
import PropTypes from 'prop-types';
import UserSelect from './UserSelect';
import { userPropTypesShape } from '../objects';

function FascistPower(props) {
  const titles = {
    cardPeek: 'Card Peek',
    kill: 'Execution time!',
    inspect: "Inspect another player's party",
    election: 'Special Election',
  };

  const bodies = {
    cardPeek: 'These are the next three cards to be played',
    kill: 'Choose a player to execute using the form below',
    inspect: 'Choose a player to inspect using the form below',
    election: 'Choose a player to be president next round',
  };

  const getResponses = {
    cardPeek: () => '',
  };

  const submitForm = (event) => {
    event.preventDefault();
    props.enactFascistPower(getResponses[props.type]());
  };

  const forms = {
    cardPeek: (
      <form onSubmit={submitForm}>
        {props.info ? props.info.map(card => <span>|{card}|</span>) : null}
        <input type="submit" value="Continue Game" />
      </form>
    ),
    kill: (
      <UserSelect
        submitText="I formally execute this player."
        users={props.users}
        onSubmit={props.enactFascistPower}
      />
    ),
    inspect: (
      <UserSelect
        submitText="Tell me this player's party"
        users={props.users}
        onSubmit={props.enactFascistPower}
      />
    ),
    election: (
      <UserSelect
        submitText="Make this player as President next round"
        users={props.users}
        onSubmit={props.enactFascistPower}
      />
    ),
  };

  return (
    <div>
      <h2>Fascist Power</h2>
      <p>{titles[props.type]}</p>
      <p>{bodies[props.type]}</p>
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
