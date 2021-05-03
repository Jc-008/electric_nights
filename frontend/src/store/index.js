import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import sessionReducer from '../store/session'       // used as
import eventsReducer from "./event";
import searchReducer from './search'


// Set a key of session in the rootReducer's combineReducer object argument to the session reducer. --------------------------------
const rootReducer = combineReducers({    //rootReducer is an empty object that the reducers will go into it.
  // add reducer functions here
  session: sessionReducer,          // session key points to the sessionReducer,
  events: eventsReducer,               // new slice of state while combining this new reducer
  search: searchReducer           // added a new slice of state for search feature
});


let enhancer;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
