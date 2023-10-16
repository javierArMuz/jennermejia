import { Route, Routes } from 'react-router-dom'
import HomePage from '../HomePage/HomePage'

const MyRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/inicio' element={<HomePage />} />
      <Route path='*' element={<HomePage />} />
    </Routes>
  )
}

export default MyRouter