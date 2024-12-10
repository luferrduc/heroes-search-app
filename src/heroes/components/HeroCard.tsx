import { Link } from "react-router";
import { Hero } from "../interfaces/hero.interface"


interface Props extends Hero{
  key?: string;
}

export const HeroCard = ({ id, superhero, alter_ego, first_appearance, characters }: Props) => {
  const heroImgUrl = `/assets/heroes/${id}-compress.webp`

  return (
    <div className="col">
        <article className="card mb-3" style={{maxWidth: "540px"}}>      
        <div className="row g-0">
          <div className="col-4">
            <img src={heroImgUrl} className="img-fluid rounded-start" alt="..."/>
          </div>
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>
              <p className="card-text">{alter_ego}</p>
              {
                (alter_ego != characters) && <p className="card-text">{characters}</p>
              }
              <p className="card-text"><small className="text-muted">{first_appearance}</small></p>
              <Link to={`/hero/${id}`} className="card-link">
                ver más..
              </Link>
            </div>            
          </div>       
        </div>
       
        {/* <div className="row no-gutters">
          <div className="col-4">
            <img src={heroImgUrl} alt={`${superhero} image`} className="card-img" />
          </div>
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>
              <p className="card-text">{alter_ego}</p>
              <p className="card-text">{characters}</p>
            </div>
          </div>
        </div> */}
      </article>
    </div>
  )
}