import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Card from "../HomeProposals/Card"

const MoreAboutMe = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('/jennermejia.com/moreaboutme.json')
      .then(response => response.json())
      .then(resp => setData(resp))
  }, [])

  return (
    <div className="moreaboutme row">
      <h2 className="text-center pb-5">Más Sobre Mi</h2>
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

export default MoreAboutMe