import React from 'react'
import './HeroSection.css';
const HeroSection = () => {
    const handleScrollToContent = () => {
    const targetSection = document.getElementById('movie-list-section');

    if (targetSection) {
      
      targetSection.scrollIntoView({
        behavior: 'smooth' 
      });
    }
  };
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Bem-vindo ao CineList!</h1>
        <p>Descubra os melhores filmes e séries.</p>
        <button className="hero-button" onClick={handleScrollToContent}>Explorar Filmes</button>
      </div>
    </section>
  );
}

export default HeroSection