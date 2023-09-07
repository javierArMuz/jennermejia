import React from 'react'
import './Profile.css'
import { Link } from 'react-router-dom'

const Profile = () => {
  return (
    <div className='profile'>
      <div className="image">
        <img src="https://ih1.redbubble.net/image.1338567365.1658/st,small,507x507-pad,600x600,f8f8f8.jpg" className='w-100 h-100' alt="" />
      </div>
      <div className="content">
        <h2>¿Quién es Jenner Mejía?</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias reiciendis ducimus non sunt ex fuga error asperiores rerum, eos blanditiis repellat odio perspiciatis, quisquam est, perferendis voluptatem commodi nisi consectetur. <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quisquam voluptatem at eius consequuntur consectetur ad perspiciatis? Tempora sequi sint, cupiditate voluptates doloremque ab, esse doloribus, hic minus animi eius.</p>
        <Link>Ver más...</Link>
      </div>
    </div>
  )
}

export default Profile