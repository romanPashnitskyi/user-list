import {AddUsersRequest, UsersRequest} from '../../store/actions/users.actions';
import {connect} from 'react-redux';
import FormContainer from '.';

const mapStateToProps = (state) => {
    return {
        name: state.users.name,
        message: state.users.message
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addUsers: (user) => dispatch(AddUsersRequest(user)),
        getUsers: () => dispatch(UsersRequest())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);
