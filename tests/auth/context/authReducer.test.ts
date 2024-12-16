import { authReducer } from "@/auth/context"
import { Action, State } from "@/auth/interfaces/auth.interfaces"



describe('Probando authReducer', () => { 
  const initialState: State = {
    logged: false
  }
  
  test('debe de retornar el estado por defecto', () => { 
    const newState = authReducer(initialState, {} as Action)
    expect(newState).toBe(initialState)

  })

  test('debe de (login) llamar el login, autenticar y establecer el user', () => { 
    const action: Action = {
      type: "[Auth] Login",
      payload: {
        name: 'Jorge'
      }
    }
    const newState = authReducer(initialState, action)
    const { logged, user } = newState
    expect(logged).toBeTruthy()
    expect(user).toHaveProperty('name', action.payload?.name)
    expect(newState).toEqual({ logged: true,  user: action.payload })

  })

  test('debe de (logout) borrar el name del usuario y logged en false', () => { 
    const state: State  = { logged: true, user: { name: 'Juanito' }}
    
    const logoutAction: Action = {
        type: "[Auth] Logout"
      }
    const newState = authReducer(state, logoutAction)
    expect(newState.logged).toBeFalsy()
    expect(newState.user).toBe(null)
    
  })

})