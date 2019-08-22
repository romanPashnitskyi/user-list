const initialState = {
  redirectUrl: '',
  id_token: ''
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_REQUEST': {
      return { ...state };
    }
    case 'LOGIN_SUCCESS': {
      localStorage.setItem('token', action.payload.data.token);
      localStorage.setItem('user', action.payload.data.user.name);
      return {
        ...state,
        redirectUrl: '/app',
        id_token: action.payload.data.token
      };
    }
    case 'LOGIN_FAILURE': {
      return { ...state, error: action.payload };
    }
    case 'LOGOUT_REQUEST': {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      return {
        ...state,
        user: null,
        id_token: null
      };
    }
    default:
      return state;
  }
};

export default authReducer;
