import { connect } from 'react-redux';

import { LoginRequest } from '../../store/actions/auth.actions';
import Login from '.';


const mapStateToProps = state => {
    return {
        redirectUrl: state.auth.redirectUrl
    };
};

const mapActionsToProps = dispatch => {
    return {
        oauth: (name, password) => dispatch(LoginRequest(name, password))
    };
};

export default connect(mapStateToProps, mapActionsToProps)(Login);

