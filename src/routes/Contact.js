import React from 'react'
import Navbar from '../components/Navbar'
import Form from '../components/Form'
import Footer from '../components/Footer'
import HeroImgProject from '../components/HeroImgProject'

const Contact = () => {
  return <div>
    <Navbar />
    <HeroImgProject heading="CONTACT ME." text="Lets have a chat"/>
    <Form />
    <Footer /></div>
}

export default Contact
