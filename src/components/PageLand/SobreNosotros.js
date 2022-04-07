import React from 'react'
import ilustracion1 from '../../assets/img/ilustracion1.svg'

const SobreNosotros = () => {
  return (
    <section className="contenedor sobre-nosotros" id="sobre-nosotros">
      <h2 className="titulo">NOSOTROS</h2>
      <div className="contenedor-sobre-nosotros">
        <img src={ilustracion1} alt="" className="imagen-about-us" />
        <div className="contenido-textos">
          <h3>
            <span>1</span>¿Quienes Somos?
          </h3>
          <p>
            En BIATYCS somos una empresa de servicios que nos especializamos en
            el diseño e implementacion de soluciones en Business Intelligence y
            Business Analitics elaborando dashboards integrados que mejoren la
            productividad de su empresa.
          </p>
          <h3>
            <span>2</span>Mision
          </h3>
          <p>
            Desarrollar soluciones integrales de alta calidad mediante
            dashboards innovadores utilizando herramientas de Business
            Intelligence y Business Analytics, que se adaptan a las necesidades
            de negocio de nuestros clientes para una mejor toma de decisiones.
          </p>
        </div>
      </div>
    </section>
  );
}

export default SobreNosotros