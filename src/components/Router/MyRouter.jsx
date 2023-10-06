import { Route, Routes } from 'react-router-dom'
import HomePage from '../HomePage/HomePage'
import Blog from '../Blog/Blog'
import Profile from '../Profile/Profile'
import Proposals from '../Proposals/Proposals'
import Contact from '../Contact/Contact'
import Education from '../Proposals/Education/Education'
import Health from '../Proposals/Health/Health'

Blog
const MyRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/inicio' element={<HomePage />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/proposals' element={<Proposals />} />
      <Route path='/proposals/education' element={<Education />} />
      <Route path='/proposals/health' element={<Health />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='*' element={<HomePage />} />
    </Routes>
  )
}

export default MyRouter