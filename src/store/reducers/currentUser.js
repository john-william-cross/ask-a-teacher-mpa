//give it the action, and the previous state.
//based on the action, it creates a new state
import actions from "../actions";

export default function currentUser(currentUser = {}, action) {
   //action has two things associated with it: action.payload and action.type
   switch (action.type) {
      case actions.STORE_CURRENT_USER:
         return action.payload; //what's the action payload in Login? it's res.data- our data object that contains currentUser data. We'll store that currentUser in the redux store
      default:
         return currentUser; //this was called 'state', but we know it's the state of the current user, so we'll call it currentUser
   }
}
//default state of currentUser is that its an empty object
