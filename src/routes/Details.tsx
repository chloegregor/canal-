import {useParams} from 'react-router'
import {useState} from 'react'
import { FindFilmBySlug, filterCategory, filterGenre } from '../utils/filterFilms'
import DisplayDetail from '../components/displayDetail'
import Tabs from '../components/tabs'
import GridItem from '../components/griditems'


export default function Details(){
  const [isActive, setIsActive] = useState(1)
  const {type, slug} = useParams()


  const tabs=[
    {id:1, label: "A voir aussi"},{id:2, label:"Du même genre"}
  ]

  if (!type || !slug){
    return(
       <div className='my-[2rem]'>
        <p>Aucun résultat.</p>
      </div>
    )
  }
  const content = type === 'film' ? FindFilmBySlug(slug) : type ===' serie' ? null : null


  if (!content){
    return(
      <div className='my-[2rem]'>
        <p>{type === 'serie' ? 'Cette série est introuvable.' : type === 'film' ? 'Ce film est introuvable.' : 'Aucun résultat'}</p>
      </div>
    )
  }
  const categories = content?.categories
  const same_categories_content = categories.map((cat) => ([...filterCategory(cat)])).flat().filter((item) => item.slug != content.slug)
  const same_genre_content = filterGenre(content.genre.toLowerCase()).filter((i) => i.slug != content.slug)
  console.log(same_genre_content)




  return (
    <div className='flex flex-col gap-10'>
      <DisplayDetail content={content} type={'film'}/>
      <div className='flex flex-col gap-10'>
        <Tabs activeTab={isActive} onChange={setIsActive} tabs={tabs} />
        <GridItem data={isActive === 1 ? same_categories_content : same_genre_content}/>
      </div>
    </div>
  )
}
