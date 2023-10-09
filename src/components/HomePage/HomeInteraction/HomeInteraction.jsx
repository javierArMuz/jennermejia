import { Link } from "react-router-dom"
import Card from "../HomeProposals/Card"
import './HomeInteraction.css'

const HomeInteraction = () => {
  return (
    <div className="interaction my-5">
      <Link>
        <Card title='Titulo' image='/header-jm' content='Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final.' />
      </Link>
      <Link>
        <Card title='Titulo' image='/header-jm' content='Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final.' />
      </Link>
    </div>
  )
}

export default HomeInteraction