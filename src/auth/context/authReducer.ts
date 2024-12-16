import { Action, State } from "../interfaces/auth.interfaces";
// import { types } from "../types/types";



export const authReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "[Auth] Login": {
        const newState: State = { ...state, logged: true, user: action.payload }
        return newState
      }
    case "[Auth] Logout": {
        const newState: State = { logged: false, user: null }
        return newState;
      }
    default:
      return state;
  }
}