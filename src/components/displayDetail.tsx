import { Content } from "../data/content"
import { categoriesLabel } from "../data/dictionnaire"
import Play from "./play"

interface displayProps{
  type: string,
  content: Content
}

export default function DisplayDetail({content, type}:displayProps){
  return(
    <div className="flex flex-col gap-10 relative  w-full ">
      <div className='mx-[-3rem] relative'>
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-black/10 to-transparent"></div>
        <img src={content.thumbnail} alt={content.slug} className="aspect-16/7 object-cover w-full  "/>
      </div>
      <div className="lg:absolute bottom-0 z-50 flex justify-center flex-wrap lg:flex-nowrap gap-10  mb-[1rem] lg:mx-[10rem] ">
        <div className=" flex min-w-[21rem] ">
        <div className="flex flex-col gap-2  w-full  ">
          <h1 className='my-0! text-center'>{content.title}</h1>
          <p className='text-[var(--grey)]'>{content.type}{" "}{content.genre}{" "}{content.duration}{" "}min{" "}{content.year}</p>
          <div className="w-full">
            <Play/>
          </div>
        </div>
        </div>
        <div className="self-end">
          <div className='flex flex-col gap-2'>
            <p className="line-clamp-4 max-w-full">{content.description}</p>
            <p className="text-[var(--grey)]">De : {content.director}</p>
            <div className="flex gap-2 flex-wrap">
              <p>Catégories :</p>
              <div className="flex gap-2 flex-wrap">
                {
                  content.categories.map((cat) => (
                    <p className="rounded-full border px-2 border-[var(--grey)] text-[var(--grey)]">{categoriesLabel[cat]}</p>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
