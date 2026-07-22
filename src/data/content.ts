import { faker } from '@faker-js/faker';

faker.seed(123)



export interface Content {
  type: string,
  title: string,
  slug: string,
  year: number,
  description: string,
  duration: number,
  genre: string
  categories: string[]
  thumbnail: string,
  videoId: string
  director: string
}
const categories = ['selection', 'incontournable', 'collection', 'nowornever', 'onceinaliftime', 'sagas']
export const genres = ['Action', 'Comédie', 'Drame', 'Science-fiction', 'Horreur', 'Romance', 'Thriller', 'Humour', 'Aventure', 'Animé', 'Animation' ]

function createFilms(): Content {
  const title = faker.book.title()
  return {
    type: "film",
    slug: faker.helpers.slugify(title).toLowerCase(),
    title,
    year: faker.date.birthdate({mode: 'year', min: 1970, max:2026}).getFullYear(),
    description: faker.lorem.paragraph({min:5, max:10}),
    duration: faker.number.int({min:60, max:190}),
    genre: faker.helpers.arrayElement(genres),
    categories: faker.helpers.arrayElements(categories, {min:1, max:2}),
    thumbnail: faker.image.urlPicsumPhotos({width:800, height:800, blur:0}),
    videoId:'jn2x9CSSvhs?si=C9ersgUZum17XvDH',
    director: faker.person.fullName()
  }


}


export const films: Content[] =  Array.from({length:60}, createFilms)
