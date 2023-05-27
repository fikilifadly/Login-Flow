import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducers from "./reducers/rootReducers";

import { sessionService } from "redux-react-session";

const initialState = {};
const middlewares = [thunk];

export const store = createStore(
  rootReducers,
  initialState,
  compose(applyMiddleware(...middlewares))
);

sessionService.initSessionService(store);
