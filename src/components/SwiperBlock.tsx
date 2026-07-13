import SwiperComponent from "./SwiperComponent";
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
  perview?: number
}


export default function SwiperBlock({data, orientation, title, subtitle, seeall, perview}: SwiperBlockProps){
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-end">
        <div>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
        </div>
        {seeall &&
          <div>
            <Link to={""} className="text-[var(--red)] hover:text-[var(--redhover)]"><p>Tout voir</p></Link>
          </div>
        }
      </div>
      <SwiperComponent data={data} orientation={orientation} perview={perview}/>
    </div>
  )
}
