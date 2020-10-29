//give it the action, and the previous state.
//based on the action, it creates a new state
import actions from "../actions";

export default function currentUser(state = {}, action) {
   switch (action.type) {
      case actions.STORE_CURRENT_USER:
         return {};
      default:
         return state;
   }
}
//default state of currentUser is that its an empty object
