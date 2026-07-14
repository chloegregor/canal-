import { Outlet } from 'react-router-dom'

export default function Layout(){
  return(
    <div className="  pt-[4rem] min-h-screen " >
      <div className="lg:px-[3rem] px-[0.8rem]">
        <Outlet/>
      </div>
    </div>
  )
}
