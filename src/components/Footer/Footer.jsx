import { Link } from 'react-router-dom'
import './Footer.css'

const MyFooter = () => {
  return (
    <footer className='footer text-center py-3' id='contact'>
      <Link to='https://www.facebook.com/jennermejiaperez' target='_blank' className='icon'>
        <i className="bi bi-facebook"></i>
      </Link>
      <Link to='https://www.instagram.com/jenner_mejiap' target='_blank' className='icon'>
        <i className="bi bi-instagram"></i>
      </Link>
      <Link to='https://wa.me/573006058289' target='_blank' className='icon'>
        <i className="bi bi-whatsapp"></i>
      </Link>
    </footer>
  )
}

export default MyFooter