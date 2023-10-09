import PropTypes from 'prop-types'

const Card = ({ title, image, content }) => {
  const images = './images/'

  return (
    <>
      <article className='card' data-aos="fade-up">
        <div className="titleImg">
          <div className="image">
            <img src={`${images}${image}.png`} className='card-img' alt={title} />
          </div>
          <h4 className='card-title text-center pt-2'>{title}</h4>
        </div>
        <div className='card-body'>
          <p className='card-text' style={{ textAlign: 'justify' }}>
            {content}
          </p>
        </div>
      </article>
    </>
  )
}

Card.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  content: PropTypes.string
}

export default Card