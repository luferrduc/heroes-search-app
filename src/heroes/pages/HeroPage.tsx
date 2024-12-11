import { Navigate, useNavigate, useParams } from "react-router"
import { getHeroById } from "../helpers"
import { useMemo } from "react"

export const HeroPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()

	const hero = useMemo(() => getHeroById(id as string)!, [id]) 

	if (!hero) {
		return <Navigate to="/" />
	}

  const handleNavigateBack = () => {
    navigate(-1)
  }

	const heroImgUrl = `/assets/heroes/${id}-compress.webp`
	const { superhero, alter_ego, characters, first_appearance, publisher } = hero

	return (
		<div className="row mt-md-3">
			<div className="col-12 col-md-4">
				<img className="img-thumbnail" src={heroImgUrl} alt={superhero} />
			</div>
			<div className="col-12 col-md-8 d-flex flex-column justify-content-between">
				<div className="row">
          <h3>{superhero}</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <b>Alter ego: </b>
              {alter_ego}
            </li>
            <li className="list-group-item">
              <b>Publisher: </b>
              {publisher}
            </li>
            <li className="list-group-item">
              <b>First appearance: </b>
              {first_appearance}
            </li>
          </ul>
          <h5 className="mt-3">Characters</h5>
          <p>{characters}</p>
        </div>
				<div className="row d-flex justify-content-end mt-auto">
          <button 
            className="btn btn-outline-primary px-5 w-auto"
            onClick={handleNavigateBack}
            >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-left"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 12l14 0" />
              <path d="M5 12l4 4" />
              <path d="M5 12l4 -4" />
            </svg>
            Back
          </button>
        </div>
			</div>
		</div>
	)
}
