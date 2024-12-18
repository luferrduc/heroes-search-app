import { AuthContext } from "@/auth/context"
import { AuthContextType } from "@/auth/interfaces/auth.interfaces"
import { AppRouter } from "@/router/AppRouter"
import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router"

describe('Probando <AppRouter />', () => { 

  test('debe de mostrar el login si no está autenticado', () => { 
    const contextValue: AuthContextType = {
      authState: { logged: false },
      login: vi.fn<(name: string, email?: string) => void>(), 
      logout: vi.fn<() => void >()
    }
    render(
      <MemoryRouter initialEntries={['/search']}>
        <AuthContext.Provider value={contextValue}>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>  
    ) 
    const h1 = screen.getByRole('heading', { level: 1 })
    expect(h1).toBeDefined()
    expect(h1.innerHTML).toBe('Login')
  })

  test('debe de mostrar el componente de Marvel si está autenticado', () => { 
    const contextValue: AuthContextType = {
      authState: { logged: true, user: { name: 'Jorge' } },
      login: vi.fn<(name: string, email?: string) => void>(), 
      logout: vi.fn<() => void >()
    }
    render(
      <MemoryRouter initialEntries={['/login','/marvel']}>
        <AuthContext.Provider value={contextValue}>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>  
    ) 
    const h1 = screen.getByRole('heading', { level: 1 })
    expect(h1).toBeDefined()
    expect(h1.innerHTML).toBe('Marvel')
  })

})