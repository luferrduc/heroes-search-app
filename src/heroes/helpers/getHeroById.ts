import { heroes } from "../data/heroes";



export const getHeroById = (id: string) => {
  return heroes.find( heroe => heroe.id === id)
}