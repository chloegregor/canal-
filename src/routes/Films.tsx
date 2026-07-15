import SwiperBlock from "../components/SwiperBlock"
import SwiperGenre from "../components/SwiperGenre"
import { genres } from "../data/content"
import { filterGenre, filterCategory } from "../utils/filterFilms"

export default function Films(){
  return(
    <div>
      <h1>Cinéma</h1>
      <div className="flex flex-col gap-15">
        <SwiperBlock data={filterCategory('selection')} type={"categoy"} category={"selection"} perview={3} orientation={'paysage'} title={""}/>
        <SwiperGenre type={"film"} data={genres}/>
        <SwiperBlock data={filterCategory('selection')} type={"categoy"} category={"selection"}  orientation={'paysage'} title={"A l'affiche"}/>
        <SwiperBlock data={filterCategory('incontournable')} type={"categoy"} category={"incontournable"} orientation={'portrait'} title={"Les incontournables"}/>
        <SwiperBlock data={filterGenre('drame')} type={"genre"} category={"drame"} orientation={'portrait'} title={"Drames"}/>
        <SwiperBlock data={filterGenre('humour')} type={"genre"} category={"humour"} orientation={'portrait'} title={"Humour"}/>
        <SwiperBlock data={filterGenre('aventure')}  type={"genre"} category={"aventure"}orientation={'portrait'} title={"Aventure"}/>




      </div>
    </div>
  )
}
