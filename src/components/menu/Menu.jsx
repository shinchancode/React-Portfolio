import React from 'react';
import "./menu.scss"

export default function Menu({menuOpen,setMenuOpen}) {
  return (
    <div className={'menu ' + (menuOpen && "active")} id="menu">
      <ul onClick={()=>setMenuOpen(false)}>
        <li>
          <a href="#intro">Home</a>
        </li>
        <li>
          <a href="#edu">Education</a>
        </li>
        <li>
          <a href="#portfolio">Project</a>
        </li>
        <li>
          <a href="#works">Experience</a>
        </li>
        <li>
          <a href="#profiles">Profiles</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>

      </ul>
    </div>
  )
}
