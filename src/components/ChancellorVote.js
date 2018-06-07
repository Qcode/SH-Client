import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { userPropTypesShape } from '../objects';
import images from '../images';
import { voteToString } from '../utils';
import './ChancellorVote.css';

class ChancellorVote extends Component {
  constructor(props) {
    super(props);

    this.state = { vote: 'uncast', castVote: false, previousVote: 'uncast' };
    this.setVote = this.setVote.bind(this);
    this.submitVote = this.submitVote.bind(this);
  }

  setVote(vote) {
    this.setState({ vote });
  }

  submitVote() {
    if (this.state.vote === 1 || this.state.vote === 0) {
      this.props.voteForChancellor(this.state.vote);
      this.setState({ castVote: true, previousVote: this.state.vote });
    }
  }

  render() {
    const jaClassName =
      this.state.vote === 1
        ? 'chancellor-vote-image__selected chancellor-vote-image'
        : 'chancellor-vote-image';

    const neinClassName =
      this.state.vote === 0
        ? 'chancellor-vote-image__selected chancellor-vote-image'
        : 'chancellor-vote-image';

    return (
      <div className="chancellor-vote">
        <h1 className="title-text">Chancellor Vote</h1>
        <p>{this.props.nominee.username} has been nominated for chancellor</p>
        <div className="chancellor-vote-options-container">
          <button className="chancellor-vote-button" type="button" onClick={() => this.setVote(1)}>
            <img alt="Ja! card" className={jaClassName} src={images.votes.ja} />
          </button>
          <button className="chancellor-vote-button" type="button" onClick={() => this.setVote(0)}>
            <img alt="Nein! card" className={neinClassName} src={images.votes.nein} />
          </button>
        </div>
        <Button
          disabled={this.state.vote === 'uncast'}
          onClick={this.submitVote}
          variant="outlined"
          color="primary"
        >
          {this.state.vote === 'uncast'
            ? 'Select Ja! or Nein! above'
            : `Vote ${voteToString(this.state.vote)} for ${this.props.nominee.username}`}
        </Button>
        {this.state.vote !== 'uncast' && this.state.castVote ? (
          <p>
            You have voted {voteToString(this.state.previousVote)} for {this.props.nominee.username}
          </p>
        ) : null}
      </div>
    );
  }
}

ChancellorVote.propTypes = {
  voteForChancellor: PropTypes.func.isRequired,
  nominee: userPropTypesShape.isRequired,
};

export default ChancellorVote;
