import Profile from './HomeProfile/Profile'
import Proposals from './HomeProposals/Proposals'
import Defray from './HomeDefray/Defray'
import './HomePages.css'

const HomePage = () => {
  return (
    <>
      <main className='container-fluid'>
        <Profile />
        <Defray />
        <Proposals />
      </main>
    </>
  )
}

export default HomePage