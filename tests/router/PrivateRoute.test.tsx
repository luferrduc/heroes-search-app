import { AuthContext } from "@/auth/context"
import { AuthContextType } from "@/auth/interfaces/auth.interfaces"
import { PrivateRoute } from "@/router/PrivateRoute"
import { render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from "react-router"



describe('Probando <PriavteRoute />', () => { 

  test('debe de navegar si no está autenticado', () => { 
    const contextValue: AuthContextType = {
      authState: { logged: false },
      login: vi.fn<(name: string, email?: string) => void>(), 
      logout: vi.fn<() => void >()
    }
    
    render(
    <AuthContext.Provider value={contextValue}>
     <MemoryRouter initialEntries={['/marvel']}>
        <Routes>
          <Route path="marvel" element={
            <PrivateRoute>
              <h1>Ruta privada</h1>
            </PrivateRoute>  
          }/>
          <Route path="/login" element={<h1>Ruta pública login</h1>}/>
        </Routes>
      </MemoryRouter>
    </AuthContext.Provider>
    )
    const h1 = screen.getByRole('heading', { level: 1 })
    expect(h1).toBeDefined()
    expect(h1.innerHTML).toBe('Ruta pública login')
  })


  test('debe de mostrar el children si está autenticado', () => { 

    Storage.prototype.setItem = vi.fn();

    const contextValue: AuthContextType = {
      authState: { logged: true, user: { name: "John" } },
      login: vi.fn<(name: string, email?: string) => void>(), 
      logout: vi.fn<() => void >()
    }
    
    render(
    <AuthContext.Provider value={contextValue}>
      <MemoryRouter initialEntries={['/marvel']}>
        <Routes>
          <Route path="marvel" element={
            <PrivateRoute>
              <h1>Ruta privada</h1>
            </PrivateRoute>  
          }/>
          <Route path="/login" element={<h1>Ruta pública login</h1>}/>
        </Routes>
      </MemoryRouter>
    </AuthContext.Provider> 
    )
    const h1 = screen.getByRole('heading', { level: 1 })
    expect(h1).toBeDefined()
    expect(h1.innerHTML).toBe('Ruta privada')
    expect(localStorage.setItem).toHaveBeenCalled()
    expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel')

  })



})