import React from 'react'
import Navbar from '../components/Navbar'
import HeroImgProject from '../components/HeroImgProject'
import Work from '../components/Work'
import Footer from '../components/Footer'

const Project = () => {
  return <div>
    <Navbar />
    <HeroImgProject heading="PROJECTS." text="Some of my most recent work"/>
    <Work />
    <Footer />
  </div>
}

export default Project
