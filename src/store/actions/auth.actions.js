export const LoginRequest = (name, password) => {
    return {
        type: 'LOGIN_REQUEST',
        payload: {name, password}
    };
};

export const LoginSuccess = data => {
    return {
        type: 'LOGIN_SUCCESS',
        payload: data
    };
};

export const LoginFailure = err => {
    return {
        type: 'LOGIN_FAILURE',
        payload: err
    };
};

export const LogoutRequest = () => {
    return {
        type: 'LOGOUT_REQUEST',
        payload: null
    };
};