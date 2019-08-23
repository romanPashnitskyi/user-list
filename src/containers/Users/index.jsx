import React, { Component } from 'react';

import UserList from '../../components/UserList';
import Title from '../../components/Title';
import Pagination from '../../components/Pagination';
import { Button } from '../../components/FormComponent';
import { Wrapper } from '../FormContainer';

import { connectSocket } from '../../store/soccet.wrapper';

class Users extends Component {

    componentDidMount() {
        connectSocket();
    }

    handleLogout = () => {
        this.props.logout();
        window.location.replace('/account/login');
    };

    handleGetCurrentUsers = (page, perPage) => {
        this.props.getUsers(page, perPage);
    };

    render() {
        const { users, total, page, perPage, loading, getUsers, deleteUsers, editUsers } = this.props;
        return (
            <Wrapper padding='80px'>
                <Button width='70px' margin='160px' onClick={this.handleLogout}>Logout</Button>
                <Title title='User List'/>
                <UserList users={users} loading={loading} page={page} perPage={perPage}
                          getUsers={getUsers} deleteUser={deleteUsers} editUsers={editUsers}/>
                <Pagination perPage={perPage} total={total} paginate={this.handleGetCurrentUsers}/>
            </Wrapper>
        );
    }
}

export default Users;
