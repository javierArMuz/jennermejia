import React from 'react'
import './TitleImg.css'
import { Link } from 'react-router-dom'

const TitleImg = () => {
  return (
    <div className='titleImg'>
      <Link to='/' className="image">
        <img src="https://ih1.redbubble.net/image.1338567365.1658/st,small,507x507-pad,600x600,f8f8f8.jpg" alt="" />
      </Link>
      <h1>Jenner Mejía</h1>
    </div>
  )
}

export default TitleImg