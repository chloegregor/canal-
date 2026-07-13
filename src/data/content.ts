import { faker } from '@faker-js/faker';


 interface Film {
  type: string,
  title: string,
  slug: string,
  year: Date,
  description: string,
  duration: number,
  genre: string
  categories: string[]
  thumbnail: string,
  videoId: string


}
const categories = ['selection', 'incontournable', 'collection', 'nowornever', 'onceinaliftime', 'sagas']
const genres = ['Action', 'Comédie', 'Drame', 'Science-fiction', 'Horreur', 'Romance', 'Thriller']

function createFilms(): Film {
  const title = faker.book.title()
  return {
    type: "film",
    slug: faker.helpers.slugify(title).toLowerCase(),
    title,
    year: faker.date.birthdate({mode: 'year', min: 1970, max:2026}),
    description: faker.lorem.paragraph({min:2, max:3}),
    duration: faker.number.int({min:60, max:190}),
    genre: faker.helpers.arrayElement(genres),
    categories: faker.helpers.arrayElements(categories, {min:1, max:2}),
    thumbnail: faker.image.urlPicsumPhotos({width:600, height:600}),
    videoId:'jn2x9CSSvhs?si=C9ersgUZum17XvDH'
  }
}


export const films: Film[] =  Array.from({length:60}, createFilms)
