import { ReactNode, useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer"
import { Action } from "../interfaces/auth.interfaces"

const initialState = {
  logged: false
}

export const AuthProvider = ({ children }: { children: ReactNode }) => {

  const [authState, dispatch] = useReducer(authReducer, initialState)

  const login = (name: string, email?: string) => {
    const action: Action = {
      type: "[Auth] Login",
      payload: {
        name: name,
        email: email
      }
    }
    dispatch(action)
  }

  return (
    <AuthContext.Provider value={{ authState, login }}>
      {children}
    </AuthContext.Provider>
  )
}