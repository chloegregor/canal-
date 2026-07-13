import SwiperBlock from "../components/SwiperBlock"
import { filterCategory } from "../utils/filterFilms"


export default function Home(){
  return (
    <div>
      <h1>Explorer</h1>
      <div className="flex flex-col gap-5">
        <SwiperBlock data={filterCategory("selection")} orientation={'portrait'} title={"Notre séléction"} />
        <SwiperBlock data={filterCategory("incontournable")} orientation={'portrait'} title={"Les incontournables"} />
        <SwiperBlock data={filterCategory("collection")} orientation={'portrait'} title={"Notre collection"} />
        <SwiperBlock data={filterCategory("nowornever")} orientation={'portrait'} title={"Maintenant... ou jamais !"} />
        <SwiperBlock data={filterCategory("onceinaliftime")} orientation={'portrait'} title={"A voir au moins une fois dans sa vie"} />
        <SwiperBlock data={filterCategory("sagas")} orientation={'portrait'} title={"Les sagas"} />


      </div>
    </div>
  )
}
