import React from 'react';
import "./topbar.scss";
import {Person,Mail, Note} from "@material-ui/icons";

export default function Topbar({menuOpen,setMenuOpen}) {
  return (
    <div className={"topbar " + (menuOpen && "active")} id="topbar">
    <div className="wrapper">
      <div className="left">
      <a href="#intro" className="logo">aarti.rathi</a>
      <div className="itemContainer1">
      <Person className="icon"/>
      <span>+91 7040031669</span>
      </div>
      <div className="itemContainer2">
      <Mail className="icon"/>
      <span>aarti.rathi1710@gmail.com</span>
      </div>
      <div className="itemContainer3">
      <a href="https://drive.google.com/drive/folders/13YGuvdkXQdyFzfuJd3YdUaG99dhCPz22" target="_blank"><Note className="icon"/><span>Resume</span></a>
      </div>

      </div>
      
      <div className="right">
        <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
          <span className="line1"></span>
          <span className="line2"></span>
          <span className="line3"></span>
        </div>
      </div>
    </div>
    </div>
  )
}
