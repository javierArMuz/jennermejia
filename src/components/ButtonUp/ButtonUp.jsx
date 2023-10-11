import { useState } from 'react';
import './ButtonUp.css'

const ButtonUp = () => {

  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true)
    } else if (scrolled <= 300) {
      setVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      behavior: 'smooth',
      top: 0
    })
  }

  window.addEventListener('scroll', toggleVisible)

  return (
    <div className={`btn-up ${visible ? 'btn-show' : 'btn-hide'}`} onClick={() => scrollToTop()}>
      <i className="bi bi-arrow-up"></i>
    </div>
  )
}

export default ButtonUp
