import { combineReducers } from "redux";
import { productsReducer, selectedProductsReducer } from "./productsReducer";
import { Authreducer } from "../Auth/reducer"
const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
  Authreducer: Authreducer
});
export default reducers;
