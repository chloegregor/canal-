import { useParams } from "react-router-dom";
import { filterCategory, filterGenre } from "../utils/filterFilms";
import { categoriesLabel } from "../data/dictionnaire";
import GridItem from "../components/griditems";

export default function Filter(){
  const {filter, slug} = useParams();

  if (!filter || !slug){
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
          <p>{'Aucun résultat'}</p>
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
