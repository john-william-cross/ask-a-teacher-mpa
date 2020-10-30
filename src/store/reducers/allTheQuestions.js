import actions from "../actions";

export default function allTheQuestions(state = [], action) {
   // action.payload, action.type
   switch (action.type) {
      case actions.STORE_ALL_QUESTIONS:
         return action.payload; //this will be an array of objects that will be stored inside our Redux store
      default:
         return state;
   }
}
