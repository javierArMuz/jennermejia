import './Defray.css'

const Defray = () => {
  return (
    <article className="defray my-5">
      <div className='row justify-content-center'>
        <div className="col-sm-6 d-flex flex-column justify-content-center align-items-center mb-4">
          <h2 className="text-center py-3">¿Cómo Votar Por Jenner?</h2>
          <p>En el tarjeton no olvides cruar dos (2) líneas formando una X sin salirse de recuadro.</p>
          <div className="icon">
            <img src="./images/logosabanalarganosune.png" alt="" />
          </div>
        </div>
        <div className="col-sm-6 votingCard">
          <div>
            <img src="./images/tarjeton.png" alt="" />
          </div>
        </div>
      </div>
    </article>
  )
}

export default Defray