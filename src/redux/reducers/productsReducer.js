import { ActionTypes } from "../constants/action-types";
const intialState = {
  products: [],
};

export const productsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    case ActionTypes.SORTING:

      if (payload === "low") {
        console.log("payload", payload)
        return { ...state, products: [...state.products].sort((a, b) => a.price - b.price) }
      } else  {
        console.log("payload", payload)
        return { ...state, products: [...state.products].sort((a, b) => a.price - b.price) }
      }
    default:
      return state;
  }
};

export const selectedProductsReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};
