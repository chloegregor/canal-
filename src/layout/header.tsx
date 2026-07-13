import {Link} from 'react-router'

export default function Header(){
  return (
    <div className="border-b border-[var(--line)] h-[4em] flex items-center fixed w-full px-[2rem] bg-[var(--bg)] z-100 ">
      <div className="flex  w-full">
        <Link to={'/'} className="w-fit ">
          <img src="/src/assets/Logo.svg" alt="logo" height='auto' width='120' className='' />
        </Link>
      </div>
    </div>
  )
}
