import { UsersRequest, DeleteUsersRequest, EditUsersRequest } from '../../store/actions/users.actions';
import { LogoutRequest } from '../../store/actions/auth.actions';
import {connect} from 'react-redux';
import Users from '.';

const mapStateToProps = (state) => {
  return {
    authUser: localStorage.getItem('user'),
    users: state.users.users,
    loading: state.users.loading
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: () => dispatch(UsersRequest()),
    deleteUsers: (user) => dispatch(DeleteUsersRequest(user)),
    editUsers: (id, user) => dispatch(EditUsersRequest(id, user)),
    logout: () => dispatch(LogoutRequest())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
