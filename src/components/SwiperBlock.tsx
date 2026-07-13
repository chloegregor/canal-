import SwiperComponent from "./Swiper";
import {Link} from 'react-router'

interface data {
  type: string,
  thumbnail: string,
  slug:string
}

interface SwiperBlockProps {
  data: data[],
  orientation:string
  title: string,
  subtitle?: string
  seeall?: boolean
}


export default function SwiperBlock({data, orientation, title, subtitle}: SwiperBlockProps){
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-end">
        <div>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
        </div>
        <div>
          <Link to={""} className="text-[var(--red)] hover:text-[var(--redhover)]"><p>Tout voir</p></Link>
        </div>
      </div>
      <SwiperComponent data={data} orientation={orientation}/>
    </div>
  )
}
