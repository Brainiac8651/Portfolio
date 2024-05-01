import "./FormStyles.css"

import React from 'react'

const Form = () => {
  return (
    <div className="form">
        <form action="">
            <label htmlFor="">Your Name</label>
            <input type="text" />
            <label htmlFor="">Email</label>
            <input type="Emai" />
            <label htmlFor="">Subject</label>
            <input type="text" />
            <label htmlFor="">Message</label>
            <textarea rows="6" placeholder="Type your message here"></textarea>
            <button className="btn">SUMBIT</button>
        </form>
    </div>
  )
}

export default Form
