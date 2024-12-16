import { AuthContext } from "@/auth/context"
import { AuthContextType } from "@/auth/interfaces/auth.interfaces"
import { PublicRoute } from "@/router/PublicRoute"
import { render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from "react-router"



describe('Probando <PublicRoute />', () => { 

  test('debe de mostrar el children si no está autenticado', () => { 
    const contextValue: AuthContextType = {
      authState: { logged: false },
      login: vi.fn<(name: string, email?: string) => void>(), 
      logout: vi.fn<() => void >()
    }
    
    render(
    <AuthContext.Provider value={contextValue}>
      <PublicRoute>
        <h1>Ruta pública</h1>
      </PublicRoute>        
    </AuthContext.Provider>
    )
    const h1 = screen.getByRole('heading', { level: 1 })
    expect(h1).toBeDefined()
    expect(h1.innerHTML).toBe('Ruta pública')
  })


  test('debe de navegar si está autenticado', () => { 
    const contextValue: AuthContextType = {
      authState: { logged: true, user: { name: "John" } },
      login: vi.fn<(name: string, email?: string) => void>(), 
      logout: vi.fn<() => void >()
    }
    
    render(
    <AuthContext.Provider value={contextValue}>
      <MemoryRouter initialEntries={['/login']}>
        <Routes>
          <Route path="login" element={
            <PublicRoute>
              <h1>Ruta pública</h1>
            </PublicRoute>  
          }/>
          <Route path="/" element={<h1>Heroes App</h1>}/>
        </Routes>
        
      </MemoryRouter>
    </AuthContext.Provider> 
    )
    const h1 = screen.getByRole('heading', { level: 1 })
    expect(h1).toBeDefined()
    expect(h1.innerHTML).toBe('Heroes App')
  })

})