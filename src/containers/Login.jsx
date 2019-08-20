import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { LoginRequest } from '../store/actions/auth.actions';
import { disconnect } from '../store/socket.wrapper';
class Login extends Component {

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        disconnect();
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.redirectUrl !== nextProps.redirectUrl) {
            window.location.href = nextProps.redirectUrl;
        }
    }

    onSubmit() {
        const login = this.login.value;
        const password = this.password.value;
        this.props.oauth(login, password);
    }

    render() {
        return (
            <div className="main">
                <div>
                    <input
                        ref={_ref => this.login = _ref}
                        type="text"
                        placeholder="login"
                    />
                </div>
                <div>
                    <input
                        ref={_ref => this.password = _ref}
                        type="password"
                        placeholder="password"
                    />
                </div>
                <div>
                    <button onClick={this.onSubmit}>Submit</button>
                </div>
            </div>
        );
    }
}

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

export default withRouter(
    connect(
        mapStateToProps,
        mapActionsToProps
    )(Login)
);
