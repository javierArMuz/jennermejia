import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import Card from "../HomeProposals/Card"

const HomeInteraction = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    fetch('/interaction.json')
      .then(response => response.json())
      .then(resp => setData(resp))
  }, [])

  return (
    <div className="interaction py-5" id="blog">
      <h2 className="text-center py-5" data-aos="flip-left">Diálogos Con La Comunidad</h2>
      <div className="cardsLink">
        {data.map((info, index) => (
          <Link to={info.link} key={index} target="_blank" rel="noreferrer">
            <Card {...info} add='VER MÁS' />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default HomeInteraction