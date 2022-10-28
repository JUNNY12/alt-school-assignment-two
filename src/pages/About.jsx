import React from 'react'
import { NavLink, Outlet} from 'react-router-dom'

const About = () => {
  return (
    <div>
      <nav style={{margin:'2rem'}}>
          <ul>
              <li>
                  <NavLink to='mission'>Mission</NavLink>
              </li>
              <li>
                  <NavLink to='vision'>Vision</NavLink>
              </li>
          </ul>
      </nav>
      <Outlet />
 </div>
  )
}

export default About