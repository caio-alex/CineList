import React from 'react'
import './HeroSection.css'; // Certifique-se de criar este arquivo CSS
const HeroSection = () => {
    const handleScrollToContent = () => {
    // Encontra o elemento com o ID 'movie-list-section'
    const targetSection = document.getElementById('movie-list-section');

    if (targetSection) {
      // Usa scrollIntoView para rolar suavemente até o elemento
      targetSection.scrollIntoView({
        behavior: 'smooth' // Faz a rolagem ser suave
      });
    }
  };
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Bem-vindo ao CineList!</h1>
        <p>Descubra os melhores filmes e séries.</p>
        {/* Você pode adicionar um botão ou outros elementos aqui */}
        <button className="hero-button" onClick={handleScrollToContent}>Explorar Filmes</button>
      </div>
    </section>
  );
}

export default HeroSection