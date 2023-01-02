import "./App.css";

import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { About } from "./components/About";
import { Home } from "./components/Home";
import { Projects } from "./components/Projects";
import Image from "./components/Image";
import ImageButton from "./components/ImageButton";

function App() {
  return (
    <div>
      <div className="contextWrapper">
        <Image />
      </div>
      <ImageButton />

      <nav className="btnHeader">
        <Link to="/">
          <button className="btnHome">Home</button>
        </Link>
        <Link to="/About">
          <button className="btnAbout">About me</button>
        </Link>
        <Link to="/Projects">
          <button className="btnProjects">Projects</button>
        </Link>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Projects" element={<Projects />} />
        </Routes>
      </nav>
    </div>
  );
}

export default App;
