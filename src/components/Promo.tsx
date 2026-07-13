import Play from "./play";

interface PromoProp{
  data:{
    slug: string,
    thumbnail:string,
    type:string
  }
}

export default function Promo({data}: PromoProp){
  return (
    <div className="relative">
      <div className=" mx-[-3rem] aspect-7/3">
        <img src={data.thumbnail} alt='coverimg' className=" w-full h-full object-cover "></img>
      </div>
      <div className="absolute bottom-0">
        <div className='mb-[1rem]'>
          <p className="text-[1.5em]">CANAL% CREATION ORIGINALE</p>
        </div>
        <Play/>
      </div>
    </div>
  )
}
