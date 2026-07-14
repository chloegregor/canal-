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
      <div className=" mx-[-3rem] aspect-7/3 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-black/10 to-transparent"></div>
        <img src={data.thumbnail} alt='coverimg' className=" w-full h-full object-cover "></img>
      </div>
      <div className="absolute bottom-0 flex flex-col gap-5 mb-[1rem]">
        <div className=''>
          <p className="lg:text-[1.5em] text-[1em] ">CANAL% CREATION ORIGINALE</p>
        </div>
        <div className="">
          <Play/>
        </div>
      </div>
    </div>
  )
}
