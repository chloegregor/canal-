import { films } from "../data/content";

export function filterCategory (category:string){

  const data = films.filter((film)=> film.categories.includes(category))
  const trimmed_data = data.map((film) => ({slug: film.slug, type: film.type, thumbnail: film.thumbnail}))
  return trimmed_data
}
