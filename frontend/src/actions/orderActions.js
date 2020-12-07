import axios from 'axios';
import {
  CREATE_ORDER_FALIURE,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
} from '../constants/orderConstants';

export const createNewOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch({ type: CREATE_ORDER_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    console.log(order, 'order');

    const { data } = await axios.post('/api/orders', order, config);

    dispatch({ type: CREATE_ORDER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CREATE_ORDER_FALIURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
