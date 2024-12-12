import { createContext } from "react";
import { AuthContextType } from "../interfaces/auth.interfaces";


// TODO: AuthContextType 
/* 
  {
    state: State;
    dispatch: React.Dispatch<Action>
  }
*/

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);