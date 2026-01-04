import React from 'react'
import {Link} from 'react-router-dom'
import { assets } from '../assets/assets'

const AdminNavbar = () => {
  return (
    <div className='flex py-3 items-centre justify-between px-8 md:px-10 border-b border-gray-300/30'>
      <Link to='/'>
      <img src={assets.logo} alt="logo" className='w-36 h-auto'/>
      </Link>
    </div>
  )
}

export default AdminNavbar
