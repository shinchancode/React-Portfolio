import React from 'react';
import "./portfolioList.scss";

export default function PortfolioList({id,title,active,setSelected}) {
  
  return (
    <li className={active ? "portfoliolist active" : "portfoliolist"} id="portfoliolist" onClick={() => setSelected(id)}>
      {title}
    </li>
  )
}
