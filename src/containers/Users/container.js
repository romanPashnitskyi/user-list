import {UsersRequest} from '../../store/actions/users.actions';
import {connect} from 'react-redux';
import Users from '.'

const mapStateToProps = (state) => {
  return {
    users: state.users.users
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: () => dispatch(UsersRequest())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
