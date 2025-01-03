import { AuthContext } from "@/auth/context"
import { AuthContextType } from "@/auth/interfaces/auth.interfaces"
import { Navbar } from "@/ui/components"

import { fireEvent, render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router"

const mockUseNavigate = vi.fn();

vi.mock('react-router', async () => {
  const actual = await vi.importActual('react-router');
  return {
    ...actual,
    useNavigate: () => mockUseNavigate
  };
});

const contextValue: AuthContextType = {
  authState: { logged: true, user: { name: 'Jorge' } },
  login: vi.fn<(name: string, email?: string) => void>(), 
  logout: vi.fn<() => void >()
}

beforeEach(() => {
  vi.clearAllMocks()
})

describe('Probando <Navbar />', () => { 

  test('debe de mostrar el nombre del usuario', () => { 

    render(
      <MemoryRouter>
        <AuthContext.Provider value={contextValue}>
          <Navbar />
        </AuthContext.Provider>
      </MemoryRouter>  
    ) 
    const name = contextValue.authState.user!.name
    
    expect(screen.getByText(name)).toBeTruthy()
  })

  // Hacer click en el Logout
  test('debe de ejecutarse el handleLogout, el logout y el navigate("login", { replace: true })', () => {      
    render(
      <MemoryRouter>
        <AuthContext.Provider value={contextValue}>
          <Navbar />
        </AuthContext.Provider>
      </MemoryRouter>
    ) 

    const { logout } = contextValue

    const btn = screen.getByRole('button', { name: 'Logout' })
    fireEvent.click(btn)

    expect(logout).toHaveBeenCalled()
    expect(logout).toHaveBeenCalledOnce()
    expect(mockUseNavigate).toHaveBeenCalled()
    expect(mockUseNavigate).toHaveBeenCalledOnce()
    expect(mockUseNavigate).toHaveBeenCalledWith('/login', { replace: true });
  })
})