import { useEffect, useState } from "react"
import Card from "./Card"
import './Card.css'

const Proposals = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('./proposals.json')
      .then(response => response.json())
      .then(datos => setData(datos))
  }, [])

  return (
    <section className='proposals'>
      <h2 className='text-center p-3' data-aos="flip-left">Conoce nuestro plan de gobierno</h2>
      <p className="text-center"><i>Para más información descargalo aquí</i></p>
      <div className="cards">
        {data.map((info, index) => (
          <Card key={index} info={info} />
        ))}
      </div>
    </section>
  )
}

export default Proposals