import "./intro.scss";
import {init} from 'ityped';
import React , { useEffect , useRef} from "react";

export default function Intro() {

  const textRef=useRef();
  useEffect(()=>
  {
    init(textRef.current, { showCursor: true, backSpeed: 60,backDelay: 1500, strings: [" Student"," Content Writer ",' Web Developer ', ' Developer '," Coding ", " Motivated "," Quick Learner "," Tech Enthusiast ", " Google Cloud Ready "] })
  },[]);
  return (
    <div className="intro" id="intro">
      <div className="left">
      <div className="imgContainer">
        <img src="assets/aarti.jpg" alt="" />
      </div>
        <div className="links">
          <a href="https://api.whatsapp.com/send/?phone=917040031669&text&app_absent=0&lang=en" target="_blank"><img src="assets/img/wp.png" alt="" /></a>
          <a href="https://www.facebook.com/aarti.rathi.1710" target="_blank"><img src="assets/img/fb.png" alt="" /></a>
          <a href="https://www.linkedin.com/in/aarti-rathi-a6031814b/" target="_blank"><img src="assets/img/linkedin.png" alt="" /></a>
          <a href="https://github.com/shinchancode" target="_blank"><img src="assets/img/github.png" alt="" /></a>
          <a href="https://linktr.ee/rathi17" target="_blank"><img src="assets/img/linktree.png" alt="" /></a>
        </div>
      </div>

      <div className="right">
        <div className="wrapper">
          <h2>Hii there, I'm </h2>
          <h1>Aarti Rathi</h1>
        </div>

        <div className="top">
          <img src="assets/lp.png" alt=""  class="img-fluid animated" />
          <h3><span ref={textRef}></span></h3> 
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>

  
    )
}
