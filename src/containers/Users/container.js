import { UsersRequest, DeleteUsersRequest, EditUsersRequest } from '../../store/actions/users.actions';
import { LogoutRequest } from '../../store/actions/auth.actions';
import { connect } from 'react-redux';
import Users from '.';

const mapStateToProps = (state) => {
  return {
    page: state.users.page,
    perPage: state.users.perPage,
    total: state.users.total,
    users: state.users.users,
    loading: state.users.loading
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: (page, perPage) => dispatch(UsersRequest(page, perPage)),
    deleteUsers: (user) => dispatch(DeleteUsersRequest(user)),
    editUsers: (id, user) => dispatch(EditUsersRequest(id, user)),
    logout: () => dispatch(LogoutRequest())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
