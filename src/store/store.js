import { createStore } from "redux";
import { composedWithDevTools } from "redux-devtools-extension";
import rootReducer from "./store/reducers";

const initialState = {
   user: {
      //
   },
   allQuestions: [],
};

const store = createStore(rootReducer, initialState, composedWithDevTools);

export default store;
