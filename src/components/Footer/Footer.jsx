import { Link } from 'react-router-dom'
import './Footer.css'

const MyFooter = () => {
  return (
    <footer className='footer text-center py-5 mt-5' id='contact'>
      <h3 className='py-3'>Contáctanos en:</h3>
      <article className='redes-link'>
        <Link to='https://www.facebook.com/jennermejiaperez' target='_blank' rel='noreferrer' className='icon'>
          <i className="bi bi-facebook"></i>
        </Link>
        <Link to='https://www.instagram.com/jenner_mejiap' target='_blank' rel='noreferrer' className='icon'>
          <i className="bi bi-instagram"></i>
        </Link>
        <Link to='https://wa.me/573006058289' target='_blank' rel='noreferrer' className='icon'>
          <i className="bi bi-whatsapp"></i>
        </Link>
      </article>
    </footer>
  )
}

export default MyFooter