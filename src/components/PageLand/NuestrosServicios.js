import React from 'react'
import ilustracion1 from '../../assets/img/ilustracion1.svg'
import ilustracion2 from '../../assets/img/ilustracion4.svg'
import ilustracion3 from '../../assets/img/ilustracion3.svg'

const NuestrosServicios = () => {
  return (
    <section className="about-services" id="about-services">
      <div className="contenedor">
        <h2 className="titulo">Nuestros servicios</h2>
        <div className="servicio-cont">
          <div className="servicio-ind">
            <img src={ilustracion1} alt="" />
            <h3>Name</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
              qui?
            </p>
          </div>
          <div className="servicio-ind">
            <img src={ilustracion2} alt="" />
            <h3>Name</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
              qui?
            </p>
          </div>
          <div className="servicio-ind">
            <img src={ilustracion3} alt="" />
            <h3>Name</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
              qui?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NuestrosServicios