import "./FooterStyles.css"
import React from "react"
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa" 

const Footer = () => {
  return ( 
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color: 
                    '#fff', marginRight: '2rem'}}/>
                    <div>
                        <p>123 Housing Society.</p>
                        <p>Bangladesh.</p>
                    </div>
                </div>
                <div className="phone">
                   <h4> <FaPhone size={20} style={{color: 
                    '#fff', marginRight: '2rem'}}/>
                    0410997665 </h4>
                </div>
                <div className="email">
                   <h4> <FaMailBulk size={20} style={{color: 
                    '#fff', marginRight: '2rem'}}/>
                    Cvholloway8651@gmail.com </h4>
                </div>
            </div>

            <div className="right">
                <h4>About Me</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia fugit perferendis quia quidem beatae. Asperiores adipisci quis sed maiores hic!</p>
                <div className="social">
                    <FaFacebook size={30} style={{color: 
                    '#fff', marginRight: '1rem'}}/>
                    <FaTwitter size={30} style={{color: 
                    '#fff', marginRight: '1rem'}}/>
                    <FaLinkedin size={30} style={{color: 
                    '#fff', marginRight: '1rem'}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
