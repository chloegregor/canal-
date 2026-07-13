import {Link} from 'react-router'
import Nav from '../components/nav'

export default function Header(){
  return (
    <div className="border-b border-[var(--line)] h-[4em] flex items-center fixed w-full px-[2rem] bg-[var(--bg)] z-100 ">
      <div className="flex gap-5 w-full">
        <div>
          <Link to={'/'} className="w-fit ">
            <img src="/src/assets/Logo.svg" alt="logo" height='auto' width='120' className='' />
          </Link>
        </div>
        <Nav/>
      </div>
    </div>
  )
}
