import React from 'react';
import PropTypes from 'prop-types';

function FascistPower(props) {
  const titles = {
    cardPeek: 'Card Peek',
  };

  const bodies = {
    cardPeek: 'These are the next three cards to be played',
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
};

export default FascistPower;
