import {NavLink} from 'react-router'
import {useState, useEffect} from 'react'

export default function Nav(){


  return(
    <div className='flex justify-between  w-full'>
      <div className="flex gap-5">
        <div>
          <NavLink to={'/'}
            end
            className={({isActive}) => (isActive ? 'text-[var(--red)]' : '')}>
              <p>Explorer</p>
          </NavLink>
        </div>
        <div>
          <NavLink to={'/film'} className={({isActive}) => (isActive ? 'text-[var(--red)]' : '')}>
            <p>Cinéma</p>
          </NavLink>
        </div>
        <div>
          <p>Séries</p>
        </div>
      </div>
      <div className="">
        <NavLink to={'/admin/dashboard'} className={({isActive}) => (isActive ? 'text-[var(--red)]' : '')}>
          Admin
        </NavLink>
      </div>

    </div>
  )
}
