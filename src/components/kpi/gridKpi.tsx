
interface data{
  title: string
  img?:string
}

interface GridKpiProps{
  qty: number,
  data: data[]
}


const GRID_COLS: Record<number, string> = {
  1: "grid-cols-1",
  2: "grid-cols-2 ",
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
  5: "grid-cols-5",
  6: "lg:grid-cols-6",
  7:"lg:grid-cols-7",
  8:"lg:grid-cols-8",
  9:"lg:grid-cols-9",
  10:"lg:grid-cols-10",
}


export default function GridKpi({qty,data}:GridKpiProps){

  const grid_cols = GRID_COLS[qty]



  return (
    <div className={`lg:grid ${grid_cols} flex flex-col  gap-5 p-5 `}>
      {data.map((d, index) => (
        <div key={index} className='flex flex-col gap-2' >
        {
          d.img &&
          <img src={d.img} alt={d.title} className='aspect-3/4'/>
        }
          <p className="truncate text-center ">{d.title}</p>
          <p className="text-center lg:text-[2em]">{index+1}</p>
        </div>

      ))}

    </div>
  )
}
