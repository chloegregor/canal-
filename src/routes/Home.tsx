import SwiperBlock from "../components/SwiperBlock"
import Promo from "../components/Promo"
import { filterCategory, getFilm } from "../utils/filterFilms"


export default function Home(){
  return (
    <div>
      <Promo data={getFilm()}/>
      <h1>Explorer</h1>
      <div className="flex flex-col gap-15">
        <SwiperBlock data={filterCategory("selection")} orientation={'portrait'} title={"Notre séléction"} subtitle={"Choisi avec soin juste pour vous"} />
        <SwiperBlock data={filterCategory("incontournable")} orientation={'portrait'} title={"Les incontournables"} subtitle={"A ne pas manquer !"} seeall={true} />
        <SwiperBlock data={filterCategory("collection")} orientation={'paysage'} perview={3.5} title={"les collections"} seeall={true} />
        <SwiperBlock data={filterCategory("nowornever")} orientation={'portrait'} title={"Maintenant... ou jamais !"} subtitle={"Ils ne seront bientot plus disponibles..."} seeall={true} />
        <SwiperBlock data={filterCategory("onceinaliftime")} orientation={'portrait'} title={"A voir au moins une fois dans sa vie"} />
        <SwiperBlock data={filterCategory("sagas")} orientation={'paysage'} perview={3.5} title={"Les sagas"} subtitle={"Des univers boulversants"}/>
      </div>
    </div>
  )
}
