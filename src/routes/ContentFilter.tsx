import {useParams} from 'react-router'
import { filterGenre, filterCategory } from '../utils/filterFilms';
import GridItem from '../components/griditems';
import { categoriesLabel } from '../data/dictionnaire';

export default function ContentGenre(){
  const {type, filter, slug} = useParams();

  if (!type || !filter || !slug){
    return(
      <div>
        <p>Resultat introuvable</p>
      </div>
    )
  }

  const filtered_content = filter === 'category' ? filterCategory(slug) : filter === 'genre' ? filterGenre(slug) : null

  if (!filtered_content){
    return(
      <div>
        <p>{type === 'serie' ? 'Séries introuvables' : type === 'film' ? 'Films introuvables' : null}</p>
      </div>
    )
  }

  const title = filter === 'category' ? categoriesLabel[slug] : filter === 'genre' ? filtered_content[0].genre : null


  return (
    <div>
      <h1>{title}</h1>
      <div>
        <GridItem data={filtered_content}/>
      </div>
    </div>
  )
}
