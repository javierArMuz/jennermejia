// import React from 'react'
import './TitleImg.css'
// import { Link } from 'react-router-dom'

const TitleImg = () => {
  return (
    <section className="titleImg shadow" id='inicio'>
      <div className="image w-100">
        <img className="w-100 h-100" data-aos="fade-down"
          src="images/header-jm.png"
          alt="Jenner Mejía" />
      </div>
    </section>
  )
}

export default TitleImg