import { Link } from "react-router-dom"
import Card from "../HomeProposals/Card"
import { useEffect, useState } from "react"
import './HomeInteraction.css'

const HomeInteraction = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    fetch('./interaction.json')
      .then(response => response.json())
      .then(resp => setData(resp))
  }, [])

  return (
    <div className="interaction py-5" id="blog">
      <h2 className="text-center py-5">Diálogos Con La Comunidad</h2>
      <div className="cards">
        {data.map((info, index) => (
          <Link key={index}>
            <Card {...info} />
          </Link>
        ))}

      </div>
    </div>
  )
}

export default HomeInteraction