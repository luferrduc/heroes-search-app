

export interface State {
  logged: boolean;
  user?: UserPayload
}


export interface UserPayload {
  name: string;
  email?: string;
}

type ActionTypes = '[Auth] Login' | '[Auth] Logout'

export interface Action {
  type: ActionTypes;
  payload?: UserPayload;
}    


export interface AuthContextType {
  authState: State;
  login: (name: string, email?: string) => void
}