import React, {Component} from 'react';

import { Wrapper } from '../FormContainer';
import UserList from '../../components/UserList';
import Title from '../../components/Title';

class Users extends Component {


    render() {
        const { getUsers, deleteUsers, editUsers } = this.props;
        return (
            <Wrapper padding='80px'>
                <Title title='User List' />
                <UserList getUsers={getUsers} users={this.props.users}
                          deleteUser={deleteUsers} editUsers={editUsers}/>
            </Wrapper>
        );
    }

}

export default Users;
