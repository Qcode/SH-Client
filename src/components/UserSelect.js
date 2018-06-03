import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import UserCard from './UserCard';
import { getRoleFromUser } from '../utils';
import { userPropTypesShape } from '../objects';
import './UserSelect.css';

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

  handleUserChange(newUserId) {
    this.setState({ userSelected: newUserId });
  }

  render() {
    return (
      <div className="user-select">
        <div className="user-select-cards">
          {this.props.users.map(this.props.optionMapFunction)}
        </div>
        <Button onClick={this.submitForm} variant="outlined" color="primary">
          {`${this.props.submitPrefix} ${
            this.props.users.find(user => user.id === this.state.userSelected).username
          } ${this.props.submitSuffix}`}
        </Button>
      </div>
    );
  }
}

UserSelect.propTypes = {
  users: PropTypes.arrayOf(userPropTypesShape).isRequired,
  onSubmit: PropTypes.func.isRequired,
  submitPrefix: PropTypes.string,
  submitSuffix: PropTypes.string,
  optionMapFunction: PropTypes.func,
  getFirstUser: PropTypes.func,
};

UserSelect.defaultProps = {
  submitPrefix: 'Submit',
  submitSuffix: '',
  optionMapFunction: user => (
    <button
      onClick={() => {
        this.handleUserChange(user.id);
      }}
    >
      <UserCard
        role={getRoleFromUser(user)}
        roleImage={user.roleImage}
        username={user.username}
        selected={user.id === this.state.userSelected}
      />
    </button>
  ),
  getFirstUser: users => users[0],
};

export default UserSelect;
