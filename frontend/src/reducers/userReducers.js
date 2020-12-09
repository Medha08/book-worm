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
  USER_ORDERS_COLLECTION_FALIURE,
  USER_ORDERS_COLLECTION_REQUEST,
  USER_ORDERS_COLLECTION_SUCCESS,
  USER_ORDERS_COLLECTION_RESET,
  USER_DETAILS_RESET,
  USERS_LIST_REQUEST,
  USERS_LIST_SUCCESS,
  USERS_LIST_FALIURE,
  USERS_LIST_RESET,
  USER_DELETE_FALIURE,
  USER_DELETE_SUCCESS,
  USER_DELETE_REQUEST,
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
    case USER_DETAILS_RESET:
      return { user: {} };
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

export const userOrdersReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case USER_ORDERS_COLLECTION_REQUEST:
      return { ...state, loading: true };
    case USER_ORDERS_COLLECTION_SUCCESS:
      return { loading: false, orders: action.payload };
    case USER_ORDERS_COLLECTION_FALIURE:
      return { loading: false, error: action.payload };
    case USER_ORDERS_COLLECTION_RESET:
      return { orders: [] };
    default:
      return state;
  }
};

export const usersListReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case USERS_LIST_REQUEST:
      return { loading: true };
    case USERS_LIST_SUCCESS:
      return { loading: false, users: action.payload };
    case USERS_LIST_FALIURE:
      return { loading: false, error: action.payload };
    case USERS_LIST_RESET:
      return { users: [] };
    default:
      return state;
  }
};

export const userDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_DELETE_REQUEST:
      return { loading: true, success: false };
    case USER_DELETE_SUCCESS:
      return { loading: false, success: true };
    case USER_DELETE_FALIURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
