
interface KpiProps extends React.PropsWithChildren{
    title:string

  }

export default function Kpi({title, children}:KpiProps){
  return (
    <div className=' flex-1 flex flex-col  gap-5'>
      <p className='lg:text-[1.4em]'>{title}</p>
      <div className='border flex border-[var(--line)] rounded-lg justify-center p-5'>
        {children}
      </div>
    </div>

  )
}
