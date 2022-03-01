import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Edu from "./components/edu/Edu";
import Profiles from "./components/profiles/Profiles";
import Works from "./components/works/Works";
import Contact from "./components/contact/Contact";
import "./app.scss";
import React , {useState} from "react";
import Menu from "./components/menu/Menu";


function App() {

  const [menuOpen,setMenuOpen] = useState(false) //to make  menu active/inactive

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Edu/>
        <Portfolio/>
        <Works/>
        <Profiles/>
        <Contact/>
      </div>
      </div>
  );
}

export default App;
