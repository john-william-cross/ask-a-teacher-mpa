import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import combineReducers from "./combineReducers";

const initialState = {
   user: {},
   allQuestions: [],
};

const store = createStore(combineReducers, initialState, composeWithDevTools());

export default store;
