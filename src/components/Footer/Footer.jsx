import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer text-center'>
      <Link className='icon'>
        <i className="bi bi-facebook"></i>
      </Link>
      <Link className='icon'>
        <i className="bi bi-instagram"></i>
      </Link>
      <Link className='icon'>
        <i className="bi bi-twitter"></i>
      </Link>
      <Link className='icon'>
        <i className="bi bi-youtube"></i>
      </Link>
    </div>
  )
}

export default Footer