import { Link } from 'react-router-dom'
import './Footer.css'

const MyFooter = () => {
  return (
    <footer className='footer text-center mt-2'>
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
    </footer>
  )
}

export default MyFooter