import { createStore, combineReducers } from "redux";
import waitlistReducer from "./reducers";

const rootReducer = combineReducers({
  waitlist: waitlistReducer,
});

const store = createStore(rootReducer);

export default store;