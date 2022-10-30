import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
        <div>
            <ul>
              <li>
                <Link to='/'>
                    Home
                </Link>
                </li>

                 <li>
                    <NavLink
                     to='/about/mission'
                     className={({isActive})=> (isActive? 'active' : "")}>
                         About
                    </NavLink>
                </li>
                
                <li>
                    <NavLink 
                    to='/service'
                    className={({isActive})=> (isActive? 'active' : "")}>
                        Service
                    </NavLink>
                </li>
               
                <li>
                    <NavLink
                     to='/shop/users'
                     className={({isActive})=> (isActive? 'active' : "")}>
                         Shop
                    </NavLink>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Nav