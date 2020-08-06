import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import history from "../../services/history";

// call auth reducers here
import { auth } from "./auth/reducers";
import { calendarEventsReducer } from "./movies/reducers";

export default combineReducers({
  router: connectRouter(history),
  auth: auth,
  calendarEventsReducer: calendarEventsReducer,
});
