import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer";
import thunkMiddleware from "redux-thunk";

// The Redux DevTools extension is used if available, otherwise the default `compose` method is used
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// It was created in the Redux store
const store = createStore(
  reducer,  // The reducer is passed to handle state updates
  composeEnhancer(applyMiddleware(thunkMiddleware)) // Redux Thunk middleware is applied to handle asynchronous actions
);

export default store;