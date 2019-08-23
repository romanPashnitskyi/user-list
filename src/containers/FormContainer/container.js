import {AddUsersRequest, UsersRequest} from '../../store/actions/users.actions';
import {connect} from 'react-redux';
import FormContainer from '.';

const mapStateToProps = (state) => {
    return {
        page: state.users.page,
        perPage: state.users.perPage,
        message: state.users.message
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addUsers: (user) => dispatch(AddUsersRequest(user)),
        getUsers: (page, perPage) => dispatch(UsersRequest(page, perPage))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);
