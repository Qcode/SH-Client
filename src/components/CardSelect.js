import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import images from '../images';
import { gameStagePropTypes } from '../objects';

class CardSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.selectCard = this.selectCard.bind(this);
    this.submitDiscardCard = this.submitDiscardCard.bind(this);
  }

  selectCard(card) {
    this.setState({ cardToDiscard: card });
  }

  submitDiscardCard() {
    if (this.props.gameStage === 'presidentPolicySelect') {
      this.props.submitDiscardCard(this.props.cards[this.state.cardToDiscard]);
    } else if (this.props.gameStage === 'chancellorPolicySelect') {
      // We reverse the options, so user can pick which card to play rather than to discard
      // Hopefully more intuitive
      // Even though the back end works purely on discarding
      const card = this.state.cardToDiscard === 1 ? 0 : 1;
      this.props.submitDiscardCard(this.props.cards[card]);
    }
  }

  render() {
    const getDiscardVerb = () =>
      (this.props.gameStage === 'presidentPolicySelect' ? 'discard' : 'play');

    const altOptions = { liberal: 'Liberal policy', fascist: 'Fascist policy' };
    return (
      <div className="card-select">
        <h1 className="title-text">Legislative Session</h1>
        <p>{`Pick your policy to ${getDiscardVerb()}`}</p>
        <div className="card-select-cards-container">
          {this.props.cards.map((card, index) => (
            <button className="card-display-card-container" onClick={() => this.selectCard(index)}>
              <img
                alt={altOptions[card]}
                className="card-display-card-image"
                style={{ 'border-color': index === this.state.cardToDiscard ? '#e16d54' : 'white' }}
                src={card === 'liberal' ? images.policies.liberal : images.policies.fascist}
              />
            </button>
          ))}
        </div>
        <Button
          variant="outlined"
          color="primary"
          disabled={typeof this.state.cardToDiscard !== 'number'}
          onClick={this.submitDiscardCard}
        >
          {typeof this.state.cardToDiscard !== 'number'
            ? `Choose a policy to ${getDiscardVerb()}`
            : `${getDiscardVerb()} a ${this.props.cards[this.state.cardToDiscard]} policy`}
        </Button>
      </div>
    );
  }
}

CardSelect.propTypes = {
  submitDiscardCard: PropTypes.func.isRequired,
  cards: PropTypes.arrayOf(PropTypes.oneOf(['liberal', 'fascist'])).isRequired,
  gameStage: gameStagePropTypes.isRequired,
};

export default CardSelect;
