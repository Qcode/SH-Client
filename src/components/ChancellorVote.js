import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { userPropTypesShape } from '../objects';

class ChancellorVote extends Component {
  constructor(props) {
    super(props);

    this.state = { vote: 'uncast' };
    this.submitYes = this.submitYes.bind(this);
    this.submitNo = this.submitNo.bind(this);
  }

  submitYes() {
    this.setState({ vote: 'Ja!' });
    this.props.voteForChancellor(1);
  }

  submitNo() {
    this.setState({ vote: 'Nein!' });
    this.props.voteForChancellor(0);
  }

  render() {
    return (
      <div>
        <h2>Chancellor Vote:</h2>
        <p>{this.props.nominee.username} has been nominated for chancellor</p>
        <p>Please cast your vote for them using one of the following buttons</p>
        <button type="button" onClick={this.submitYes}>
          Ja!
        </button>
        <button type="button" onClick={this.submitNo}>
          Nein!
        </button>
        {this.state.vote !== 'uncast' ? (
          <p>
            You have voted {this.state.vote} for {this.props.nominee.username}
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
