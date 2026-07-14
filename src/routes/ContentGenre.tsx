import {useParams} from 'react-router'
import { filterGenre } from '../utils/filterFilms';
import GridItem from '../components/griditems';

export default function ContentGenre(){
  const {type, genre} = useParams();

  const movie_genre = filterGenre(genre!)[0].genre



  return (
    <div>
      <h1>{movie_genre}</h1>
      <div>
        <GridItem data={filterGenre(movie_genre.toLowerCase())}/>
      </div>
    </div>
  )
}
