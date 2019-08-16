import {UsersRequest, DeleteUsersRequest, EditUsersRequest} from '../../store/actions/users.actions';
import {connect} from 'react-redux';
import Users from '.'

const mapStateToProps = (state) => {
  return {
    users: state.users.users
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: () => dispatch(UsersRequest()),
    deleteUsers: (user) => dispatch(DeleteUsersRequest(user)),
    editUsers: (id, user) => dispatch(EditUsersRequest(id, user))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
