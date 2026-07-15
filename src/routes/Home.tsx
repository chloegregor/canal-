import SwiperBlock from "../components/SwiperBlock"
import Promo from "../components/Promo"
import { filterCategory, getFilm } from "../utils/filterFilms"


export default function Home(){
  return (
    <div>
      <Promo data={getFilm()}/>
      <h1>Explorer</h1>
      <div className="flex flex-col gap-15">
        <SwiperBlock data={filterCategory("selection")} type={'category'} category={'selection'} orientation={'portrait'} title={"Notre séléction"} subtitle={"Choisi avec soin juste pour vous"} />
        <SwiperBlock data={filterCategory("incontournable")} type={'category'} category={'incontournable'} orientation={'portrait'} title={"Les incontournables"} subtitle={"A ne pas manquer !"} seeall={true} />
        <SwiperBlock data={filterCategory("collection")} type={'category'} category={'collection'} orientation={'paysage'} perview={3.5} title={"les collections"} seeall={true} />
        <SwiperBlock data={filterCategory("nowornever")} type={'category'} category={'nowornever'} orientation={'portrait'} title={"Maintenant... ou jamais !"} subtitle={"Ils ne seront bientot plus disponibles..."} seeall={true} />
        <SwiperBlock data={filterCategory("onceinaliftime")} type={'category'} category={'onceinaliftime'} orientation={'portrait'} title={"A voir au moins une fois dans sa vie"} />
        <SwiperBlock data={filterCategory("sagas")} type={'category'} category={'sagas'} orientation={'paysage'} perview={3.5} title={"Les sagas"} subtitle={"Des univers boulversants"}/>
      </div>
    </div>
  )
}
