import PropTypes from 'prop-types'

const Card = ({ info }) => {
  const images = './images/logosProposals'

  return (
    <>
      <article className='card' data-aos="fade-up">
        <div className="titleImg">
          <div className="image">
            <img src={`${images}${info.image}.png`} className='card-img' alt={info.title} />
          </div>
          <h4 className='card-title'>{info.title}</h4>
        </div>
        <div className='card-body'>
          <p className='card-text' style={{ textAlign: 'justify' }}>
            {info.content}
          </p>
        </div>
      </article>
    </>
  )
}

Card.propTypes = {
  info: PropTypes.object
}

export default Card