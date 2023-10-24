import './Defray.css'

const Defray = () => {
  return (
    <article className="defray my-5">
      <div className='row justify-content-center'>
        <div className="left col-sm-6 d-flex flex-column justify-content-center align-items-center">
          <h2 className="text-center py-3">¿Cómo Votar Por Jenner?</h2>
          <p>En el tarjeton no olvides trazar dos (2) líneas formando una X sin salirse de recuadro.</p>
          <div className="icon">
            <img src="/images/logosabanalarganosune.png" alt="Logo Sabanalarga nos une" />
          </div>
        </div>
        <div className="right col-sm-6 d-flex align-items-center">
          <video width='100%' controls poster="/images/tarjeton.jpeg" >
            <source src="/video/defrayjenner.mp4" type="video/mp4" />
            <p>Su navegador no admite la etiqueta de video</p>
          </video>
        </div>
      </div>
    </article>
  )
}

export default Defray