import React, {Component} from 'react';

import { Wrapper } from '../FormContainer';
import UserList from '../../components/UserList';
import Title from '../../components/Title';
import {Button} from '../../components/FormComponent';

class Users extends Component {

    handleLogout = () => {
        this.props.logout();
        window.location.replace('/account/login');
    };

    render() {
        const { users, authUser, getUsers, deleteUsers, editUsers, loading } = this.props;
        return (
            <Wrapper padding='80px'>
                <Button width='70px' margin='160px' onClick={this.handleLogout}>Logout</Button>
                <Title title='User List' />
                <UserList getUsers={getUsers} users={users} authUser={authUser} loading={loading}
                          deleteUser={deleteUsers} editUsers={editUsers}/>
            </Wrapper>
        );
    }
}

export default Users;
