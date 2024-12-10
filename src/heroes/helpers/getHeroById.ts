import { heroes } from "../data/heroes";



export const getHeroesById = (id: string) => {
  return heroes.find( heroe => heroe.id === id)
}