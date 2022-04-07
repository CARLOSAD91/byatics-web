import React from 'react'

const Home = () => {
  return (
    <header>
      <nav className="menu_item">
        <a href="/">Inicio</a>
        <a href="#sobre-nosotros">Acerca de</a>
        <a href="#portafolio">Portafolio</a>
        <a href="#about-services">Servicios</a>
        <a href="#contacto">Contacto</a>
      </nav>
      <section className="textos-header">
        <h1>BIATYCS SMART SOLUTIONS</h1>
        <h2>Juntos transformaremos el mundo.</h2>
      </section>
    </header>
  );
}

export default Home