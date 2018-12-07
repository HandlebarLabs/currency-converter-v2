import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import currencies from "./currencies";
import theme from "./theme";

const reducer = combineReducers({
  currencies,
  theme
});

const middleware = [thunk];
if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}

const store = createStore(reducer, applyMiddleware(...middleware));

export default store;
