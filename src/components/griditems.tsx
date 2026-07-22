import {Link} from 'react-router'
import { categoriesLabel } from '../data/dictionnaire'

interface data{
  thumbnail: string,
  slug: string,
  type: string,
  title: string,
  genre: string
  categories: string[]
}

interface gridProps{
  data: data[]
}

export default function GridItem({data}:gridProps){
  return(
    <div className=" grid lg:grid-cols-6 lg:gap-5 grid-cols-2 gap-3">
      {data.map((d, index) => (
        <Link key={d.slug + index} to={`/details/${d.type}/${d.slug}`}>
          <div className="flex flex-col gap-2">
            <div className="aspect-3/2">
              <img src={d.thumbnail} alt={d.slug} className="w-full h-full object-cover" />
            </div>
            <div>
              <p>{d.title}</p>
              <div className="flex gap-2 text-[var(--grey)] text-[0.8em]">
                <p>{d.type}</p>
                <p>{d.genre}</p>
              </div>
              <div className='flex gap-1'>
                {d.categories.map((cat, index) => (
                  <p key={index+cat} className="rounded-full border px-2 border-[var(--grey)] text-[var(--grey)] text-[0.8em] truncate">{categoriesLabel[cat]}</p>
                ))}
              </div>
            </div>
          </div>
        </Link>

      ))}
    </div>
  )
}
