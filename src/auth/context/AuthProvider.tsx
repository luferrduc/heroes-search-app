import { ReactNode, useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer"
import { Action, State } from "../interfaces/auth.interfaces"



const init = (): State => {
  const user = JSON.parse(localStorage.getItem('user')!)

  return {
    logged: !!user,
    user: user
  }
}

export const AuthProvider = ({ children }: { children: ReactNode }) => {

  const [authState, dispatch] = useReducer(authReducer, {}, init)

  const login = (name: string, email?: string) => {

    const user = {
      name,
      email
    }
    const action: Action = {
      type: "[Auth] Login",
      payload: user
    }
    localStorage.setItem('user', JSON.stringify(user))
    dispatch(action)
  }

  const logout = () => {

    const action: Action = {
      type: "[Auth] Logout"
    }
    localStorage.removeItem('user')
    dispatch(action)
  }

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}