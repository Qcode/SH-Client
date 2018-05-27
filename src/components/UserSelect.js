import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { userPropTypesShape } from '../objects';

class UserSelect extends Component {
  constructor(props) {
    super(props);
    this.state = { userSelected: props.getFirstUser(props.users).id };

    this.submitForm = this.submitForm.bind(this);

    this.handleUserChange = this.handleUserChange.bind(this);
  }

  submitForm(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.userSelected);
  }

  handleUserChange(event) {
    this.setState({ userSelected: event.target.value });
  }

  render() {
    return (
      <form onSubmit={this.submitForm}>
        <select required onChange={this.handleUserChange}>
          {this.props.users.map(this.props.optionMapFunction)}
        </select>
        <input type="submit" value={this.props.submitText} />
      </form>
    );
  }
}

UserSelect.propTypes = {
  users: PropTypes.arrayOf(userPropTypesShape).isRequired,
  onSubmit: PropTypes.func.isRequired,
  submitText: PropTypes.string,
  optionMapFunction: PropTypes.func,
  getFirstUser: PropTypes.func,
};

UserSelect.defaultProps = {
  submitText: 'Submit',
  optionMapFunction: user => <option value={user.id}>{user.username}</option>,
  getFirstUser: users => users[0],
};

export default UserSelect;
