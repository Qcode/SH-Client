import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal } from '@material-ui/core';
import images from '../images';
import { getRoleFromUser } from '../utils';
import UserCard from './UserCard';
import { userPropTypesShape } from '../objects';
import './Memo.css';

class Memo extends Component {
  getGraphicFromString(graphicString) {
    const possibilities = {
      'liberal-affiliation': (
        <img
          alt="Liberal party affiliation"
          className="memo-affiliation"
          src={images.affiliations.liberal}
        />
      ),
      'fascist-affiliation': (
        <img
          alt="Fascist party affiliation"
          className="memo-affiliation"
          src={images.affiliations.fascist}
        />
      ),
      'liberal-policy': (
        <div style={{ width: '20%' }} className="card-display-card-container">
          <img
            alt="Liberal policy"
            className="card-display-card-image"
            src={images.policies.liberal}
          />
        </div>
      ),
      'fascist-policy': (
        <div style={{ width: '20%' }} className="card-display-card-container">
          <img
            alt="Fascist policy"
            className="card-display-card-image"
            src={images.policies.fascist}
          />
        </div>
      ),
    };
    if (Object.prototype.hasOwnProperty.call(possibilities, graphicString)) {
      return possibilities[graphicString];
    }
    const userForCard = this.props.users.find(user => user.id === graphicString);
    if (userForCard) {
      return (
        <UserCard
          role={getRoleFromUser(userForCard)}
          roleImage={userForCard.roleImage}
          username={userForCard.username}
          isPresident={userForCard.isPresident}
          isChancellor={userForCard.isChancellor}
        />
      );
    }
    return null;
  }

  render() {
    return (
      <Modal open>
        <div className="memo">
          <h1 className="title-text">Memo</h1>
          <p>{this.props.memo.text}</p>
          <div className="memo-graphics">
            {this.props.memo.graphics.map(graphicString =>
              this.getGraphicFromString(graphicString))}
          </div>
          <Button variant="outlined" color="primary" onClick={this.props.dismissMemo}>
            Dismiss Memo
          </Button>
        </div>
      </Modal>
    );
  }
}

Memo.propTypes = {
  memo: PropTypes.string.isRequired,
  dismissMemo: PropTypes.func.isRequired,
  users: PropTypes.arrayOf(userPropTypesShape).isRequired,
};

export default Memo;
