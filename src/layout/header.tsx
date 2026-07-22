import {Link} from 'react-router'
import Nav from '../components/nav'

import logo from "../assets/Logo.svg"


export default function Header(){
  return (
    <div className="border border-[var(--line)] h-[4em] w-screen flex items-center fixed  lg:px-[2rem] px-[0.7rem] bg-[var(--bg)] z-100  ">
      <div className="flex gap-5 w-full items-center">
        <div>
          <Link to={'/'} className="w-fit ">
            <img src={logo} alt="logo" height='auto' width='120' className='' />
          </Link>
        </div>
        <Nav/>
      </div>
    </div>
  )
}
