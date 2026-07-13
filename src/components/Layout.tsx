import { Outlet } from 'react-router-dom'

export default function Layout(){
  return(
    <div className="  pt-[4rem] min-h-screen " >
      <div className="px-[3rem]">
        <Outlet/>
      </div>
    </div>
  )
}
