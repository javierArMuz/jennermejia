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

  window.addEventListener('scroll', toggleVisible)

  return (
    <div className={`btn-up ${visible ? 'btn-show' : 'btn-hide'}`} onClick={() => window.scrollTo({ top: 0 })}>
      <i className="bi bi-arrow-up"></i>
    </div>
  )
}

export default ButtonUp
