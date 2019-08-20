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

export const TokenRequest = code => {
    return {
        type: 'TOKEN_REQUEST',
        payload: code
    };
};

export const TokenSuccess = data => {
    return {
        type: 'TOKEN_SUCCESS',
        payload: data
    };
};

export const TokenFailure = err => {
    return {
        type: 'TOKEN_FAILURE',
        payload: err
    };
};

export const LogoutRequest = () => {
    return {
        type: 'LOGOUT_REQUEST',
        payload: null
    };
};

export const SetUserRequest = data => {
    return {
        type: 'SET_USER_REQUEST',
        payload: data
    };
};