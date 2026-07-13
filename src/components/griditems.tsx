import {Link} from 'react-router'
interface data{
  thumbnail: string,
  slug: string,
  type: string,
  title: string,
  genre: string
}

interface gridProps{
  data: data[]
}

export default function GridItem({data}:gridProps){
  return(
    <div className=" grid lg:grid-cols-6 lg:gap-5 grid-cols-3">
      {data.map((d) => (
        <Link to={`/${d.type}/${d.slug}`}>
          <div className="flex flex-col gap-2">
            <div className="aspect-3/2">
              <img src={d.thumbnail} alt={d.slug} className="w-full h-full object-cover" />
            </div>
            <div>
              <p>{d.title}</p>
              <div className="flex gap-2 text-[var(--grey)]">
                <p>{d.type}</p>
                <p>{d.genre}</p>
              </div>
            </div>
          </div>
        </Link>

      ))}
    </div>
  )
}
