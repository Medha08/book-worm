import {
  PRODUCT_LIST_REQ,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FALIURE,
  PRODUCT_DETAILS_FALIURE,
  PRODUCT_DETAILS_REQ,
  PRODUCT_DETAILS_SUCCESS,
} from '../constants/productConstants';

import axios from 'axios';

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQ });

    const { data } = await axios.get('/api/products');

    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FALIURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQ });

    const { data } = await axios.get(`/api/products/${id}`);

    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FALIURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
