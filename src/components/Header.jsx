import React from 'react'
import logo from '../utils/FlickGPTlogo.png'
function Header() {
  return (
    <div className='absolute px-8 py-2 z-10'>
      <img className='w-20' src={logo} alt="logo" />
    </div>
  )
}

export default Header;