import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi"
import "../Components/NavBar.css";

import { useTheme } from "../contexts/ThemeContext";

import lua from "../images/moon.png"
import sol from "../images/sunny.png"

const NavBar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(search);

    if (!search) return;
    navigate(`/search?q=${search}`);
    setSearch("");
  }

  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <nav id="navbar">
        <h1 className="cinelist"><Link to="/"><p>CineList</p><BiCameraMovie/></Link></h1>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Busque um filme..." onChange={(e)=>setSearch(e.target.value)} value={search}/> 
            <button type="submit"><BiSearchAlt2/></button>
        </form>

        <button onClick={toggleTheme}>
          <img 
          src={isDarkMode ? sol : lua}
          alt={isDarkMode ? "Light Mode" : "Dark Mode"}
          className="theme-toggle"
          />
        </button>
    </nav>
  )
}

export default NavBar
