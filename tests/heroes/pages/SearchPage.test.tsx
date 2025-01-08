import { Mock } from "vitest";
import { MemoryRouter } from "react-router"
import * as ReactRouter from "react-router";
import { fireEvent, render, screen } from "@testing-library/react"


import { SearchPage } from "@/heroes/pages"


vi.mock("react-router", async () => {
  const actual = await vi.importActual<typeof ReactRouter>("react-router");
  return {
    ...actual,
    useSearchParams: vi.fn(),
  };
});

const mockSetSearchParams = vi.fn();


describe('Probando <SearchPage />', () => { 

  beforeEach(() => {
    vi.clearAllMocks()
  })
  
  
  test('debe de mostrarse correctamente con valores por defecto', () => { 
    
    (ReactRouter.useSearchParams as Mock).mockReturnValue([
      new URLSearchParams(""),
      mockSetSearchParams,
    ]);
  
    const { container } = render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>
    )
    expect(container).toMatchSnapshot()

  })

  test('debe de mostrar a Batman y el input con el valor del queryString', () => { 
    (ReactRouter.useSearchParams as Mock).mockReturnValue([
      new URLSearchParams("?q=batman"),
      mockSetSearchParams,
    ]);
  
    render(
      <MemoryRouter initialEntries={['/search?q=batman']}>
        <SearchPage />
      </MemoryRouter>
    )
    
    const input = screen.getByRole('textbox') as HTMLInputElement
    const h5 = screen.getByRole('heading', { level: 5 })
    const image = screen.getByRole('img') as HTMLImageElement
    
    expect(input.value).toBe('batman')
    expect(h5.innerHTML).toBe('Batman')
    expect(image.src).toContain(`/assets/heroes/dc-batman-compress.webp`)
  })

  test('debe de mostrar un error si no se encuentra el heroe (batman123)', () => { 

    (ReactRouter.useSearchParams as Mock).mockReturnValue([
      new URLSearchParams("?q=batman123"),
      mockSetSearchParams,
    ]);
  
    render(
      <MemoryRouter initialEntries={['/search?q=batman123']}>
        <SearchPage />
      </MemoryRouter>
    )

    expect(screen.getByRole("alert").innerHTML).toContain('There is no a hero with')
    expect(screen.getByRole("alert").innerHTML).toContain('batman123')
    
  })

  test('debe de llamar el setSearchParams con el valor de {q: "ironman" }', () => { 

    const mockSetSearchParams = vi.fn();
    (ReactRouter.useSearchParams as Mock).mockReturnValue([
      new URLSearchParams(),
      mockSetSearchParams,
    ]);
      
    render(
      <MemoryRouter initialEntries={['/search']}>
        <SearchPage />
      </MemoryRouter>
    )
    
    const input = screen.getByRole('textbox') as HTMLInputElement
    fireEvent.change(input, {
      target: {
        name: 'searchHero',
        value: 'ironman'
      }
    })
    expect(input.value).toBe('ironman')

    const form = screen.getByRole('form') as HTMLFormElement
    fireEvent.submit(form)

    expect(mockSetSearchParams).toHaveBeenCalled()
    expect(mockSetSearchParams).toHaveBeenCalledOnce()
    expect(mockSetSearchParams).toHaveBeenCalledWith({ q: 'ironman' })
  })
})