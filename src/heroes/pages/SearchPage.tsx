import { useSearchParams } from "react-router"
import { HeroCard } from "../components"
import { useForm } from "../../hooks/useForm"
import { FormEvent, memo } from "react"
import { getHeroesByName } from "../helpers"

export const SearchPage = memo(() => {

  const [searchParams, setSearchParams] = useSearchParams()

  const q = searchParams.get('q')

  const heroName = q || ''

  const filteredHeroes = getHeroesByName(heroName)
  
  const { onInputChange, searchHero } = useForm({
    searchHero: heroName
  })
  const handleSearchSubmit = (event: FormEvent) => {

    event.preventDefault()
    if(searchHero.trim().length <= 1 && searchHero.trim() != '') return
    if(heroName === searchHero.trim()) return

    setSearchParams({ q: searchHero.trim() })
    
  } 

	return (
		<>
			<h1>Search</h1>
			<hr />
			<div className="row">
				<div className="col-5">
					<h4>Searching</h4>
					<hr />
					<form onSubmit={handleSearchSubmit} name="searchForm" role="form">
						<input
							type="text"
							className="form-control"
							name="searchHero"
							placeholder="Search a hero"
							autoComplete="off"
              value={searchHero}
              onChange={onInputChange}
						/>
						<button className="btn btn-outline-primary mt-2 px-3">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width={24}
								height={24}
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth={2}
								strokeLinecap="round"
								strokeLinejoin="round"
								className="icon icon-tabler icons-tabler-outline icon-tabler-search"
							>
								<path stroke="none" d="M0 0h24v24H0z" fill="none" />
								<path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
								<path d="M21 21l-6 -6" />
							</svg>
							Search
						</button>
					</form>
				</div>
				<div className="col-7">
					<h4>Results</h4>
					<hr />					
					{/* 
						// TODO: Refactorizar el componente como Alert o algo por el estilo  
					*/}
          {
						(heroName == '')
						? <div role="alert" className="alert alert-primary animate__animated animate__fadeIn">Search a hero</div>
						: filteredHeroes.length == 0 && <div role="alert" className="alert alert-danger animate__animated animate__fadeIn">There is no a hero with <b>{heroName}</b></div>
          }
          {
            filteredHeroes?.map( hero => (
              <HeroCard key={hero.id} {...hero}/>
            ))
          }
				</div>
			</div>
		</>
	)
})
