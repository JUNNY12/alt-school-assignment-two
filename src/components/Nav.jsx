import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
        <h1>
            <Link to='/'>Logo</Link>
        </h1>
        <div>
            <ul>
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