import { combineReducers } from "redux";

import { sessionReducer } from "redux-react-session";

const rootReducers = combineReducers({
  session: sessionReducer,
});

export default rootReducers;
