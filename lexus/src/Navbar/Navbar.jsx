import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/Navbar.css'
import {FcHome} from 'react-icons/fc'
import {AiOutlineUsergroupAdd} from 'react-icons/ai'
const Navbar = () => {
  return (
    <div className='nav-link'>
      <div className='logo'>
      <h3>NYC</h3>
      </div>  
         <div className='menu'>
            <Link to='/'> <FcHome/>Home</Link>
            <Link to='/add/user'><AiOutlineUsergroupAdd/>Add Users</Link>
         </div>
    </div>
  )
}

export default Navbar