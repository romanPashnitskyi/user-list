import React, {Component} from 'react';

import UserList from '../../components/UserList';
import Title from '../../components/Title';
import Pagination from '../../components/Pagination';
import {Button} from '../../components/FormComponent';
import { Wrapper } from '../FormContainer';

import {connectSocket} from '../../store/soccet.wrapper';

class Users extends Component {

    constructor(...args) {
        super(...args);

        this.state = {
            currentPage: 1,
            usersPerPage: 5
        };
    }

    componentDidMount() {
        connectSocket();
    }

    handleLogout = () => {
        this.props.logout();
        window.location.replace('/account/login');
    };

    paginate = (number) => {
      this.setState({
          currentPage: number
      })
    };

    render() {

        const { users, getUsers, deleteUsers, editUsers, loading } = this.props;

        const indexOfLastUser = this.state.currentPage * this.state.usersPerPage;
        const indexOfFirstUser = indexOfLastUser - this.state.usersPerPage;
        const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

        return (
            <Wrapper padding='80px'>
                <Button width='70px' margin='160px' onClick={this.handleLogout}>Logout</Button>
                <Title title='User List' />
                <UserList getUsers={getUsers} users={currentUsers} loading={loading} deleteUser={deleteUsers} editUsers={editUsers}/>
                <Pagination usersPerPage={this.state.usersPerPage} totalUsers={users.length} paginate={this.paginate}/>
            </Wrapper>
        );
    }
}

export default Users;
