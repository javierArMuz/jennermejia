import { useRef } from 'react'
import './NavBar.css'


const NavBar = () => {
  const navBarRef = useRef();
  const navBarTogglerRef = useRef();

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute('id')
      const menuLink = document.querySelector(`.navbar-nav a[href='#${id}']`)

      if (entry.isIntersecting) {
        // document.querySelector('.navbar-nav a.active').classList.remove('active');
        menuLink.classList.add('active')
      }
      else {
        menuLink.classList.remove('active')
      }
    });
  }, { rootMargin: "-50% 0px -15% 0px" })


  const hideNavBar = (e) => {
    navBarRef.current.classList.remove('show');
    navBarTogglerRef.current.classList.add('collapsed');

    const hash = e.target.getAttribute('href');
    const target = document.querySelector(hash);
    if (target) {
      observer.observe(target)
    }
  }

  return (
    <nav className="navbar navbar-expand-lg" >
      <div className="container-fluid d-flex flex-lg-row-reverse">
        <button ref={navBarTogglerRef} className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-expanded="false" aria-controls="navbarNav" aria-label="Toggle navigation">
          <span className="toggler-icon top-bar"></span>
          <span className="toggler-icon middle-bar"></span>
          <span className="toggler-icon bottom-bar"></span>
        </button>

        <div ref={navBarRef} className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href='#inicio' onClick={(e) => hideNavBar(e)} className="nav-link">Inicio</a>
            </li>
            <li className="nav-item">
              <a href='#profile' onClick={(e) => hideNavBar(e)} className="nav-link">Trayectoria</a>
            </li>
            <li className="nav-item">
              <a href='#proposals' onClick={(e) => hideNavBar(e)} className="nav-link">Mi Plan de Gobierno</a>
            </li>
            <li className="nav-item">
              <a href='#blog' onClick={(e) => hideNavBar(e)} className="nav-link">Blog</a>
            </li>
            <li className="nav-item">
              <a href='#contact' onClick={(e) => hideNavBar(e)} className="nav-link">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar