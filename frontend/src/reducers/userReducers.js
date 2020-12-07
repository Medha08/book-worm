import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FALIURE,
  USER_REGISTER_FALIURE,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_REQUEST,
  USER_LOGOUT,
  GET_USER_DETAILS_REQUEST,
  GET_USER_DETAILS_SUCCESS,
  GET_USER_DETAILS_FALIURE,
  UPDATE_USER_DETAILS_FALIURE,
  UPDATE_USER_DETAILS_REQUEST,
  UPDATE_USER_DETAILS_SUCCESS,
  UPDATE_USER_DETAILS_RESET,
} from '../constants/userConstants';
export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
      };
    case USER_LOGIN_FALIURE:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST: {
      return { loading: true };
    }
    case USER_REGISTER_SUCCESS: {
      return { loading: false, userInfo: action.payload };
    }
    case USER_REGISTER_FALIURE: {
      return { loading: false, error: action.payload };
    }
    default:
      return state;
  }
};

export const userDetailsReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case GET_USER_DETAILS_REQUEST:
      return { loading: true, ...state };
    case GET_USER_DETAILS_SUCCESS:
      return { loading: false, user: action.payload };
    case GET_USER_DETAILS_FALIURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userUpdateProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_USER_DETAILS_REQUEST:
      return { loading: true };
    case UPDATE_USER_DETAILS_SUCCESS:
      return { loading: false, success: true, userInfo: action.payload };
    case UPDATE_USER_DETAILS_FALIURE:
      return { loading: false, error: action.payload };
    case UPDATE_USER_DETAILS_RESET:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
