import { AddUsersRequest } from '../../store/actions/users.actions';
import {connect} from 'react-redux';
import FormContainer from '.'

const mapStateToProps = (state) => {
    return {
        name: state.users.name,
        error: state.users.error,
        message: state.users.message
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (user) => dispatch(AddUsersRequest(user))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);
