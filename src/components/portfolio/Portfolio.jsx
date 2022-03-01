import React, { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import { webProject, dsaProject, sqlProject, otherProject } from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("web");
  const [data, setData] = useState([]);

  const list = [
    {
      id: "web",
      title: "Web",
    },
    {
      id: "dsa",
      title: "DSA & OOP",
    },
    {
      id: "sql",
      title: "SQL",
    },
    {
      id: "other",
      title: "Other",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "web":
        setData(webProject);
        break;
      case "dsa":
        setData(dsaProject);
        break;
      case "sql":
        setData(sqlProject);
        break;
      case "other":
        setData(otherProject);
        break;

      default:
        setData(webProject);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Projects</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>

      <div className="container">
        {data.map((d) => (
          <div className="box">
            <div className="item">
              <img src={d.img} alt="" />
              <h3>{d.title}</h3>
            </div>

            <div className="info">
              <div className="content">
                  <div className="center">
                    <h2>{d.desc1}</h2>
                    <h2>{d.desc2}</h2>
                    </div>
                  <div className="bottom">
                    <a href={d.git} target="_blank"><img src="assets/git.png" alt="" /></a>
                    <a href={d.demo} target="_blank"><img src="assets/link.png" alt="" /></a>
                  </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
