import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MenuItem, Select, Button } from '@material-ui/core';
import { userPropTypesShape } from '../objects';

class UserSelect extends Component {
  constructor(props) {
    super(props);
    this.state = { userSelected: props.getFirstUser(props.users).id };

    this.submitForm = this.submitForm.bind(this);

    this.handleUserChange = this.handleUserChange.bind(this);
  }

  submitForm() {
    this.props.onSubmit(this.state.userSelected);
  }

  handleUserChange(event) {
    this.setState({ userSelected: event.target.value });
  }

  render() {
    return (
      <div>
        <Select value={this.state.userSelected} required onChange={this.handleUserChange}>
          {this.props.users.map(this.props.optionMapFunction)}
        </Select>
        <Button variant="outlined" color="primary" onClick={this.submitForm}>
          {this.props.submitText}
        </Button>
      </div>
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
  optionMapFunction: user => <MenuItem value={user.id}>{user.username}</MenuItem>,
  getFirstUser: users => users[0],
};

export default UserSelect;
