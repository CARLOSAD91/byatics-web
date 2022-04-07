import React from 'react'
import img1 from '../../assets/img/img1.jpg'
import img2 from '../../assets/img/img2.jpg'
import img3 from '../../assets/img/img3.jpg'
import img4 from '../../assets/img/img4.jpg'
import img5 from '../../assets/img/img5.jpg'
import img6 from '../../assets/img/img6.jpg'
import img7 from '../../assets/img/img7.jpg'
import img8 from '../../assets/img/img8.jpg'
import icon1 from '../../assets/img/icono1.png'


const NuestrosTrabajos = () => {
  return (
    <section className="portafolio" id="portafolio">
      <div className="contenedor">
        <h2 className="titulo">Portafolio</h2>
        <div className="galeria-port">
          <div className="imagen-port">
            <img src={img1} alt="" />
            <div className="hover-galeria">
              <img src={icon1} alt="" />
              <p>Nuestro trabajo</p>
            </div>
          </div>
          <div className="imagen-port">
            <img src={img2} alt="" />
            <div className="hover-galeria">
              <img src={icon1} alt="" />
              <p>Nuestro trabajo</p>
            </div>
          </div>
          <div className="imagen-port">
            <img src={img3} alt="" />
            <div className="hover-galeria">
              <img src={icon1} alt="" />
              <p>Nuestro trabajo</p>
            </div>
          </div>
          <div className="imagen-port">
            <img src={img4} alt="" />
            <div className="hover-galeria">
              <img src={icon1} alt="" />
              <p>Nuestro trabajo</p>
            </div>
          </div>
          <div className="imagen-port">
            <img src={img5} alt="" />
            <div className="hover-galeria">
              <img src={icon1} alt="" />
              <p>Nuestro trabajo</p>
            </div>
          </div>
          <div className="imagen-port">
            <img src={img6} alt="" />
            <div className="hover-galeria">
              <img src={icon1} alt="" />
              <p>Nuestro trabajo</p>
            </div>
          </div>
          <div className="imagen-port">
            <img src={img7} alt="" />
            <div className="hover-galeria">
              <img src={icon1} alt="" />
              <p>Nuestro trabajo</p>
            </div>
          </div>
          <div className="imagen-port">
            <img src={img8} alt="" />
            <div className="hover-galeria">
              <img src={icon1} alt="" />
              <p>Nuestro trabajo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NuestrosTrabajos