import React from 'react'
import { BiCameraMovie} from "react-icons/bi"
import "../Components/Footer.css";

const Footer = () => {
  return (
    <footer>
        <div className='email-subscription'>
            <div className='cinelistlogo'>CineList<BiCameraMovie/></div>
            <div className='email'><input type="text" placeholder="Insira seu e-mail" className='emailinput'/>
            <button>Inscrever</button></div>
        </div>
        <p>Desenvolvido por Caio Alexandre</p>
        <p>Powered by <a href="https://www.themoviedb.org/" target="_blank" rel="noreferrer">The Movie Database</a></p>
    </footer>

  )
}

export default Footer