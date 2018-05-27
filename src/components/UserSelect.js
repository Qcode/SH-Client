import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { userPropTypesShape } from '../objects';

class UserSelect extends Component {
  constructor(props) {
    super(props);
    this.state = { userSelected: props.users[0].id };

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
          {this.props.users.map(user => <option value={user.id}>{user.username}</option>)}
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
};

UserSelect.defaultProps = {
  submitText: 'Submit',
};

export default UserSelect;
