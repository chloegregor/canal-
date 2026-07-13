import SwiperBlock from "../components/SwiperBlock"
import SwiperGenre from "../components/SwiperGenre"
import { genres } from "../data/content"
import { filterGenre, filterCategory } from "../utils/filterFilms"

export default function Films(){
  return(
    <div>
      <h1>Cinéma</h1>
      <div className="flex flex-col gap-15">
        <SwiperBlock data={filterCategory('selection')} perview={3} orientation={'paysage'} title={""}/>
        <SwiperGenre type={"film"} data={genres}/>
        <SwiperBlock data={filterCategory('selection')} orientation={'paysage'} title={"A l'affiche"}/>
        <SwiperBlock data={filterCategory('incontournable')} orientation={'portrait'} title={"Les incontournables"}/>
        <SwiperBlock data={filterGenre('drame')} orientation={'portrait'} title={"Drames"}/>
        <SwiperBlock data={filterGenre('humour')} orientation={'portrait'} title={"Humour"}/>
        <SwiperBlock data={filterGenre('aventure')} orientation={'portrait'} title={"Aventure"}/>




      </div>
    </div>
  )
}
