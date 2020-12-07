import {
  PRODUCT_LIST_REQ,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FALIURE,
  PRODUCT_DETAILS_FALIURE,
  PRODUCT_DETAILS_REQ,
  PRODUCT_DETAILS_SUCCESS,
} from '../constants/productConstants';

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQ:
      return {
        loading: true,
        products: [],
      };
    case PRODUCT_LIST_SUCCESS:
      return {
        loading: false,
        products: action.payload,
      };
    case PRODUCT_LIST_FALIURE:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const productDetailsReducer = (
  state = { product: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQ:
      return {
        loading: true,
        ...state,
      };
    case PRODUCT_DETAILS_SUCCESS:
      return {
        loading: false,
        product: action.payload,
      };
    case PRODUCT_DETAILS_FALIURE:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
