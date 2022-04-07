import React from 'react'
import face1 from '../../assets/img/face1.jpg'
import face2 from '../../assets/img/face2.jpg'

const NuestrosClientes = () => {
  return (
    <section className="clientes contenedor">
      <h2 className="titulo">Que dicen nuestros clientes</h2>
      <div className="cards">
        <div className="card">
          <img src={face1} alt="" />
          <div className="contenido-texto-card">
            <h4>Name</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
              sapiente!
            </p>
          </div>
        </div>
        <div className="card">
          <img src={face2} alt="" />
          <div className="contenido-texto-card">
            <h4>Name</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
              sapiente!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NuestrosClientes