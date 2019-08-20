const initialState = {
  redirectUrl: '',
  code: '',
  user: null,
  id_token: ''
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_REQUEST': {
      return { ...state };
    }
    case 'LOGIN_SUCCESS': {
      localStorage.setItem('token', action.payload);
      return {
        ...state,
        redirectUrl: '/app',
        id_token: action.payload.id_token
      };
    }
    case 'LOGIN_FAILURE': {
      return { ...state, error: action.payload };
    }
    case 'TOKEN_REQUEST': {
      return { ...state };
    }
    case 'TOKEN_SUCCESS': {
      localStorage.setItem('token', action.payload.tokens.id_token);
      localStorage.setItem('g_user', JSON.stringify(action.payload.user));
      return {
        ...state,
        user: action.payload.user,
        id_token: action.payload.id_token
      };
    }
    case 'TOKEN_FAILURE': {
      return { ...state, error: action.payload };
    }
    case 'LOGOUT_REQUEST': {
      localStorage.removeItem('token');
      localStorage.removeItem('g_user');
      return {
        ...state,
        user: null,
        id_token: null
      };
    }
    case 'SET_USER_REQUEST': {
      return {
        ...state, 
        user: action.payload
      };
    }
    default:
      return state;
  }
};

export default authReducer;
