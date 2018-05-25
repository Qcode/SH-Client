import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CardSelect extends Component {
  constructor(props) {
    super(props);

    this.state = { cardToDiscard: this.props.cards[0] };
    this.chooseCard = this.chooseCard.bind(this);
    this.submitDiscardCard = this.submitDiscardCard.bind(this);
  }

  chooseCard(event) {
    this.setState({ cardToDiscard: event.target.value });
  }

  submitDiscardCard(event) {
    event.preventDefault();
    this.props.submitDiscardCard(this.state.cardToDiscard);
  }

  render() {
    return (
      <div>
        <p>Pick your policy to discard</p>
        <form onSubmit={this.submitDiscardCard}>
          <label htmlFor="card-select__first-card">
            {this.props.cards[0]}
            <input
              id="card-select__first-card"
              onChange={this.chooseCard}
              type="radio"
              name="card-select"
              value={this.props.cards[0]}
            />
          </label>
          <br />
          <label htmlFor="card-select__second-card">
            {this.props.cards[1]}
            <input
              id="card-select__second-card"
              onChange={this.chooseCard}
              type="radio"
              name="card-select"
              value={this.props.cards[1]}
            />
          </label>
          {this.props.cards[2] ? (
            <div>
              <label htmlFor="card-select__third-card">
                {this.props.cards[2]}{' '}
                <input
                  id="card-select__third-card"
                  onChange={this.chooseCard}
                  type="radio"
                  name="card-select"
                  value={this.props.cards[2]}
                />
              </label>
            </div>
          ) : null}
          <input type="submit" />
        </form>
      </div>
    );
  }
}

CardSelect.propTypes = {
  submitDiscardCard: PropTypes.func.isRequired,
  cards: PropTypes.arrayOf(PropTypes.oneOf(['liberal', 'fascist'])).isRequired,
};

export default CardSelect;
