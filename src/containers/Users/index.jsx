import React, {Component} from 'react';

import { Wrapper } from '../FormContainer';
import UserList from '../../components/UserList';
import Title from '../../components/Title';

class Users extends Component {

  render() {

    return (
      <Wrapper padding='80px'>
        <Title title='User List' />
        <UserList getUsers={this.props.getUsers} users={this.props.users}/>
      </Wrapper>
    );
  }

}

export default Users;
