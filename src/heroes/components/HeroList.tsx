import { useMemo } from "react"
import { HeroCard } from "./HeroCard"
import { Publisher } from "@/heroes/interfaces/hero.interface"
import { getHeroesByPublisher } from "@/heroes/helpers"


interface Props {
  publisher: Publisher
}

export const HeroList = ({ publisher }: Props) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher])
  return (
    
    <div className="row row-cols-1 row-cols-md-3 g-3">
      {
        heroes.map( hero => (
          <HeroCard key={hero.id} {...hero}/>
        ))
      }
    </div>
  )
}