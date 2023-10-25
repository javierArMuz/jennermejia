import { useEffect, useState } from "react"
import Card from "./Card"
import './Card.css'
import './Proposals.css'

const Proposals = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('/proposals.json')
      .then(response => response.json())
      .then(datos => setData(datos))
  }, [])

  return (
    <section className='proposals bg-white py-5' id="proposals">
      <h2 className='text-center py-5' data-aos="flip-left">Conoce Nuestro Programa De Gobierno</h2>
      <div className="cards">
        {data.map((info, index) => (
          <Card key={index} {...info} />
        ))}
        <button className="btn btn-green">
          <a href="/programa_de_gobierno.pdf" target="_blank" className="h4">Descargalo aquí</a>
        </button>
      </div>
    </section>
  )
}

export default Proposals