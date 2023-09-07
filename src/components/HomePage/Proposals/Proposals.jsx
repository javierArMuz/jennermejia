import React from 'react'
import './Proposals.css'
import { Link } from 'react-router-dom'

const Proposals = () => {
  return (
    <div className='proposals'>
      <h2 className='text-center border p-1'>Conoce nuestro plan de gobierno aquí</h2>
      <article>
        <div className='content'>
          <h3>Educación</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est sapiente quidem iure velit ducimus a possimus animi natus, ipsum repellat magnam iusto dolorum, at cum sed magni aliquid! Reprehenderit, error. <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt autem atque tenetur, quidem omnis illum, facere accusantium impedit minus suscipit quia maiores labore expedita esse nemo quas numquam facilis quam.</p>
          <Link>Ver más...</Link>
        </div>
        <div className="image">
          <img src="https://www.sidegains.com/wp-content/uploads/2020/02/twitter_profile_image_size.jpg" alt="" />
        </div>
      </article>
      <article>
        <div className="image">
          <img src="https://www.sidegains.com/wp-content/uploads/2020/02/twitter_profile_image_size.jpg" alt="" />
        </div>
        <div className='content'>
          <h3>Salud</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est sapiente quidem iure velit ducimus a possimus animi natus, ipsum repellat magnam iusto dolorum, at cum sed magni aliquid! Reprehenderit, error. <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt autem atque tenetur, quidem omnis illum, facere accusantium impedit minus suscipit quia maiores labore expedita esse nemo quas numquam facilis quam.</p>
          <Link>Ver más...</Link>
        </div>
      </article>
      <article>
        <div className='content'>
          <h3>Empleo</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est sapiente quidem iure velit ducimus a possimus animi natus, ipsum repellat magnam iusto dolorum, at cum sed magni aliquid! Reprehenderit, error. <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt autem atque tenetur, quidem omnis illum, facere accusantium impedit minus suscipit quia maiores labore expedita esse nemo quas numquam facilis quam.</p>
          <Link>Ver más...</Link>
        </div>
        <div className="image">
          <img src="https://www.sidegains.com/wp-content/uploads/2020/02/twitter_profile_image_size.jpg" alt="" />
        </div>
      </article>
    </div>
  )
}

export default Proposals