import React, { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setcurrentSlide] = useState(0);

  const data = [
    {
      id: 1,
      name: "GeeksforGeeks",
      title: "Techincal content Writer",
      tenure: "Dec 2020 - June 2021",
      para1:
        "Wrote at least 50+ articles on Data Structures, Algorithm and Mathematics etc",
      para2: "Improved some articles too.",
      link: "https://auth.geeksforgeeks.org/user/_shinchancode/articles",
      img: "./assets/gfg.png",
    },
    {
      id: 2,
      name: "Google Cloud",
      title: "Google Cloud Training",
      tenure: "Jan 2021 - Apr 2021",
      para1:
        "Got introduced to GCP and more functionalities with free access to quests, skill badges. ",
      para2: "Additional self-paced labs on Qwiklabs from Google ",
      link: "https://www.coursera.org/account/accomplishments/specialization/7V2SFZ9YWWRL",
      img: "./assets/gcloud.jpg",
    },
    {
      id: 3,
      name: "Google Cloud Platform",
      title: "Pratice QwikLabs",
      tenure: "Oct 2020 - Apr 2021",
      para1:
        "Got introduced to Computing, Application Development, Big Data and Machine Learning using Google Cloud's on training platform Qwiklabs",
      link: "https://www.qwiklabs.com/public_profiles/48dcd029-03b4-437b-9dd3-ef7d65958eb0",
      img: "./assets/qwik.jpg",
    },
    {
      id: 4,
      name: "HacktoberFest",
      title: "Open Source Contribution",
      tenure: "Oct 2020 - Present",
      para1:
        "During the event, I have contributed to open source projects and got familiar with the GitHub",
      link: "https://dev.to/shinchancode",
      img: "./assets/hf.svg",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setcurrentSlide(currentSlide > 0 ? currentSlide - 1 : 3)
      : setcurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="works" id="works">
      <h1 className="head">Experience</h1>
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <h1>{d.name}</h1>
                  <h2>{d.title}</h2>
                  <h3>{d.tenure}</h3>
                  <p>{d.para1}</p>
                  <p>{d.para2}</p>
                  <a href={d.link} target="_blank">
                    <span>Link</span>
                  </a>
                </div>
              </div>

              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="slide">
        <img
          src="assets/arrow.png"
          className="arrow left"
          alt=""
          onClick={() => handleClick("left")}
        />
        <img
          src="assets/arrow.png"
          className="arrow right"
          alt=""
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
}
