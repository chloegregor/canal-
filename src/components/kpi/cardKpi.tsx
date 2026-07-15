
interface CardProps{
  content: string,
  variation?: number
}


export default function Card({content, variation}:CardProps){

  return (

    <div className="">
      <div className="mx-auto relative ">
        <p className='lg:text-[1.4em] mx-1'>{content}</p>
      {variation &&
       <p className={` self-center absolute left-full   ${variation >= 0 ? 'text-green-500 bottom-[40%]' : 'text-red-500 top-[40%]'}`}>{`${variation >= 0 ? '+': ``}${variation}%`}</p>
      }
      </div>
    </div>

  )
}
