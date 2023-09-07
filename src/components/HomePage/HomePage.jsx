import React from 'react'
import AutoCarousel from './AutoCarousel/AutoCarousel'
import Profile from './Profile/Profile'
import Proposals from './Proposals/Proposals'

const HomePage = () => {
  return (
    <>
      <AutoCarousel />
      <Profile />
      <Proposals />
    </>
  )
}

export default HomePage