import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

const Shop = () => {
  return (
    <div>
       <nav style={{margin:'2rem'}}>
            <ul>
                <li>
                    <NavLink 
                    to='users'
                    className={({isActive})=> (isActive? 'active' : "")}>
                      Users
                    </NavLink>
                </li>
                <li>
                    <NavLink to='products'
                     className={({isActive})=> (isActive? 'active' : "")}>
                       Products
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='favorites'
                    className={({isActive})=> (isActive? 'active' : "")}>
                      Favorites
                    </NavLink>
                </li>
            </ul>
        </nav>
        <Outlet />
    </div>
  )
}

export default Shop