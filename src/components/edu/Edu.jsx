import "./edu.scss"
import React from 'react';

export default function Edu() {

  const data =[
    {
      id: "1",
      name: "Army Institute of Technology Pune",
      img: "assets/clg.png",
      tenure: "2019 - 2023",
      marks: " SGPA : 9.3/10",
      degree: "Bachelor of Engineering",
      branch: "Information Technology",
      featured: false,
    },
    {
      id: "2",
      name: "Kendriya Vidyalaya Rangehills Pune",
      img: "assets/schl.png",
      tenure: "2016 - 2018",
      marks: "Percentage : 90% (PCM)",
      degree: "12th",
      branch: "Science",
      featured: true,
    },
    {
      id: "3",
      name: "Kendriya Vidyalaya Rangehills Pune",
      img: "assets/schl.png",
      tenure: "2016",
      marks: "CGPA : 10/10 (95%)",
      degree: "10th",
      branch: "Standard",
      featured: false,
    },
  ];
  return (
    <div className="edu" id="edu">
      <h1>Education</h1>
      <div className="container">
        {data.map((d)=> (
          <div className={d.featured ? "card featured" : "card"}>
          <div className="top">
            <h2>{d.name}</h2>
            <img src={d.img} alt="" className="imgg"/>
          </div>
          <div className="center">
          <h3>{d.tenure}</h3>
          <h2>{d.marks}</h2>
          </div>
          <div className="bottom">
          <h3>{d.degree}</h3>
          <h4>{d.branch}</h4>
          </div>
        </div>
          ))
        }
      </div>
      </div>
  )
}
