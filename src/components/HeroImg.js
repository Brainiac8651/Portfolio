import "./HeroImgStyles.css"
import React from "react"
import IntroImg from "../assets/intro-bg.jpg"
import {Link} from "react-router-dom"

const HeroImg = () => {
    return <div className="hero">
        <div className="mask">
            <img className="intro-img" src={IntroImg} alt="IntroImg" />
        </div>
        <div className="content">
            <p>HI, MY NAME IS CAMERON</p>
            <h1>FRONT END DEVELOPER</h1>
            <div>
                <Link to="/Project" className="btn">Projects</Link>
                <Link to="/Contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
  }
  
  export default HeroImg