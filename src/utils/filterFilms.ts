import { films } from "../data/content";

export function filterCategory (category:string){

  const data = films.filter((film)=> film.categories.includes(category))
  const trimmed_data = data.map((film) => ({slug: film.slug, type: film.type, thumbnail: film.thumbnail}))
  return trimmed_data
}


export function filterGenre(genre:string){
  const data = films.filter((film) => film.genre.toLowerCase().includes(genre))
  const trimmed_data = data.map((film) => ({title: film.title, slug: film.slug, type: film.type, thumbnail: film.thumbnail, genre:film.genre}))
  return trimmed_data


}

export function getFilm(){
  const data = films[0]
  const trimmed_data = {
    slug: data.slug,
    thumbnail: data.thumbnail,
    type: data.type
  }

  return trimmed_data
}
