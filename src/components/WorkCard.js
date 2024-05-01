import React from 'react'
import "./WorkCardStyles.css"
import { NavLink } from 'react-router-dom'

const WorkCard = (props) => {
  return (
    <div>
      <div className="project-card">
            <img src={props.imgsrc} />
            <h2 className="project-title">{props.title}</h2>
            <div className="pro-details">
                <p>{props.text}</p>
                <div className="pro-btns">
                    <NavLink to={props.view} className="btn" target='_blank'>VIEW</NavLink>
                    <NavLink to={props.source} className="btn" target='_blank'>SOURCE</NavLink>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WorkCard

