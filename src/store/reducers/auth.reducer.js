const initialState = {
  redirectUrl: '',
  user: null,
  id_token: ''
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_REQUEST': {
      return { ...state };
    }
    case 'LOGIN_SUCCESS': {
      localStorage.setItem('token', action.payload.data.token);
      return {
        ...state,
        redirectUrl: '/app',
        id_token: action.payload.data.token,
        user: action.payload.data.user.name
      };
    }
    case 'LOGIN_FAILURE': {
      return { ...state, error: action.payload };
    }
    case 'LOGOUT_REQUEST': {
      localStorage.removeItem('token');
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
