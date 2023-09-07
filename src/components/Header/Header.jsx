import React from 'react'
import NavBar from './NavBar/NavBar'
import TitleImg from './TitleImg/TitleImg'

const Header = () => {
  return (
    <div className='header'>
      <TitleImg />
      <NavBar />
    </div>
  )
}

export default Header