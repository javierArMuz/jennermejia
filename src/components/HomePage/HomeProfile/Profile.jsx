import MoreAboutMe from "./moreaboutme"
import './Profile.css'

const Profile = () => {
  return (
    <section className=' profile my-5' >
      <div className="about row">
        <h2 className='text-center my-5 py-3'>¿Quién es Jenner Mejía</h2>
        <div className="cards row my-3 g-3">
          <article className='card col-md-6 col-lg-4 position-relative' data-aos='fade-up' data-aos-delay='150'>
            <div className="started-number">1</div>
            <div className="image">
              <img src="https://ih1.redbubble.net/image.1338567365.1658/st,small,507x507-pad,600x600,f8f8f8.jpg" className='card-img' alt="" />
            </div>
            <div className="card-body">
              <h3 className='card-title text-center'>Preparación</h3>
              <p className='card-text' style={{ textAlign: 'center' }}>Apasionados de la formación académica, como pilar fundamental en el desarrollo personal y profesional, nos hemos esforzado en prepararnos PARA ADMINISTRAR. <br /><br />
                <strong>Estudios realizados:</strong> <br />
                Abogado. <br />
                Administrador público. <br />
                Especialista en derecho administrativo. <br />
                Magister en derecho administrativo. <br />
                Magister en administración pública. <br /><br />
                <strong>Logros académicos</strong><br />
                Mejor puntaje ICFES CODESA 1999. <br />
                Mejor prueba ECAES programa de Derecho 2008. <br />
                Mejor estudiante de administración pública  ESAP 2010. <br />
                Tesis de grado meritoria maestría en administración pública ESAP 2020.
              </p>
            </div>
          </article>
          <article className='card col-md-6 col-lg-4 position-relative' data-aos="fade-up" data-aos-delay='300'>
            <div className="started-number">2</div>
            <div className="image">
              <img src="https://ih1.redbubble.net/image.1338567365.1658/st,small,507x507-pad,600x600,f8f8f8.jpg" className='card-img' alt="" />
            </div>
            <div className="card-body">
              <h3 className='card-title text-center'>Experiencia</h3>
              <p className='card-text' style={{ textAlign: 'center' }}>
                14 años de servicio en el sector público, la mayor parte en el municipio de Sabanalarga; donde podemos destacar los siguientes logros: <br />
                Secretario de gobierno: Lideramos procesos administrativos que permitieron inversión pública representada en obras como pavimentos, saneamiento básico, vivienda, infraestructura educativa, cultural y deportiva. Además, la organización de la administración municipal. <br />
                Oficina municipal de juventudes: Logramos la aprovación de la política pública de juventud municipal y la organización de la plataforma municipal de juventudes. <br />
                Amplio conocimiento en el control fiscal de los recursos públicos gracias a nuestra experiencia profesional en la Contraloría General de la República. <br />
                Experiencia como docente de la Escuela Superior de Administración Pública ESAP en las áreas de derecho público, política pública y pensamiento administrativo.
              </p>
            </div>
          </article>
          <article className='card col-md-12 col-lg-4 position-relative' data-aos="fade-up" data-aos-delay='450'>
            <div className="started-number">3</div>
            <div className="image">
              <img src="https://ih1.redbubble.net/image.1338567365.1658/st,small,507x507-pad,600x600,f8f8f8.jpg" className='card-img' alt="" />
            </div>
            <div className="card-body">
              <h3 className='card-title text-center'>Servicio</h3>
              <p className='card-text' style={{ textAlign: 'center' }}>
                Durante nuestra vida pública hemos apoyado las manifestaciones sociales, culturales y deportivas del municipio, demostrándo que cuando hay vocación de servicio impulsamos el desarrollo y el progreso de nuestra tierra. <br /><br />
                Presidente durante dos periodos del comité de fútbol de San Carlos. <br /><br />
                Participante en torneos cancha bola de oro, las torres, Club Caldas. <br /><br />
                Hemos brindado apoyo a la participación de grupos culturales y deportivos en eventos locales y regionales.
              </p>
            </div>
          </article>
        </div>
      </div>
      <MoreAboutMe />
    </section>
  )
}

export default Profile