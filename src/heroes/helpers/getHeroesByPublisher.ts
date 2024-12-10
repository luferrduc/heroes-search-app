import { heroes } from "../data/heroes";
import { Publisher } from "../interfaces/hero.interface";


export const getHeroesByPublisher = (publisher: Publisher) => {
  const validPublishers: Publisher[] = ['DC Comics', 'Marvel Comics'];

  if(!validPublishers.includes(publisher)){
    throw new Error(`${publisher} is not a valid publisher`)
  }

  return heroes.filter( heroe => heroe.publisher === publisher)
}