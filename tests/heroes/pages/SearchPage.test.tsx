import { SearchPage } from "@/heroes/pages"
import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router"




describe('Probando <SearchPage />', () => { 

  test('debe de mostrarse correctamente con valores por defecto', () => { 
    
    const { container } = render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>
    )
    expect(container).toMatchSnapshot()

  })

  test('debe de mostrar a Batman y el input con el valor del queryString', () => { 
    
    render(
      <MemoryRouter initialEntries={['/search?q=batman']}>
        <SearchPage />
      </MemoryRouter>
    )
    
    const input = screen.getByRole('textbox') as HTMLInputElement
    const h5 = screen.getByRole('heading', { level: 5 })
    const image = screen.getByRole('img') as HTMLImageElement
    // screen.debug()

    
    expect(input.value).toBe('batman')
    expect(h5.innerHTML).toBe('Batman')
    expect(image.src).toContain(`/assets/heroes/dc-batman-compress.webp`)
  })

})