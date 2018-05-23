import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { userPropTypesShape } from '../objects';

class ChancellorSelect extends Component {
  constructor(props) {
    super(props);
    this.state = { chancellorValue: props.users[0].id };

    this.submitChancellorSelect = this.submitChancellorSelect.bind(this);
    this.handleChancellorChange = this.handleChancellorChange.bind(this);
  }

  submitChancellorSelect(event) {
    event.preventDefault();
    this.props.submitChancellor(this.state.chancellorValue);
  }

  handleChancellorChange(event) {
    this.setState({ chancellorValue: event.target.value });
  }

  render() {
    return (
      <div>
        <p>Elect a chancellor using the form below.</p>
        <form onSubmit={this.submitChancellorSelect}>
          <select required onChange={this.handleChancellorChange}>
            {this.props.users.map(user => <option value={user.id}>{user.username}</option>)}
          </select>
          <input type="submit" value="Submit Chancellor" />
        </form>
      </div>
    );
  }
}

ChancellorSelect.propTypes = {
  users: PropTypes.arrayOf(userPropTypesShape).isRequired,
  submitChancellor: PropTypes.func.isRequired,
};

export default ChancellorSelect;
