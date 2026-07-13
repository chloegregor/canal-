import {useParams} from 'react-router'
import { filterGenre } from '../utils/filterFilms';
import GridItem from '../components/griditems';

export default function ContentGenre(){
  const {type, genre} = useParams();



  return (
    <div>
      <h1>{genre}</h1>
      <div>
        <GridItem data={filterGenre(genre!)}/>
      </div>
    </div>
  )
}
