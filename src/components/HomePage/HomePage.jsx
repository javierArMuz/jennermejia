import Profile from './HomeProfile/Profile'
import Proposals from './HomeProposals/Proposals'
import Defray from './HomeDefray/Defray'
import './HomePages.css'
import HomeEndorsed from './HomeEndorsed/HomeEndorsed'
import HomeInteraction from './HomeInteraction/HomeInteraction'

const HomePage = () => {
  return (
    <>
      <main className='container-fluid'>
        <Profile />
        <Defray />
        <Proposals />
        <HomeEndorsed />
        <HomeInteraction />
      </main>
    </>
  )
}

export default HomePage