import './AutoCarousel.css'

const AutoCarousel = () => {
  return (
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" data-aos="flip-left">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://www.arauco.cl/chile/wp-content/uploads/sites/14/2017/07/400x400.png" className="d-block" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="https://bari-mercedesbenz.com.ar/wp-content/uploads/2021/07/400x400.png" className="d-block" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="https://media.forgecdn.net/avatars/628/457/638025091617341510.jpeg" className="d-block" alt="..." />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default AutoCarousel