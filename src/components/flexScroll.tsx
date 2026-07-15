
interface data{
  thumbnail: string,
  title: string,

}

interface FlexProps{
  data: data[]
}


export default function FlexScroll({data}:FlexProps){
  return (
    <div className='flex gap-5 overflow-x-auto p-2'>
      {data.map((d) => (
        <div key={d.title} className="shrink-0 flex flex-col gap-2">
          <img src={d.thumbnail} alt={d.title} className="aspect-3/4 w-[200px]" />
          <p>{d.title}</p>
        </div>
      ))}

    </div>
  )
}
