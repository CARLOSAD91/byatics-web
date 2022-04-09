import React from 'react'

const PiePagina = () => {
  return (
    <footer className="main-footer">
      <div className="container container--flex contenedor">
        <div className="column column--33">
          <h2 className="column__title">¿Por qué visitarnos?</h2>
          <p className="column__txt">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            assumenda magni sit est in ut illum nam, esse veritatis enim commodi
            vel temporibus, accusamus a saepe quam praesentium, cum
            perspiciatis.
          </p>
        </div>
        <div className="column column--33">
          <h2 className="column__title">Contactanos</h2>
          <p className="column__txt">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perspiciatis, quasi labore? Corrupti hic, blanditiis reiciendis
            maiores illo cum? Vel enim ex molestias labore facere repudiandae
            aut itaque quisquam. Eaque, tempore!
          </p>
          <p className="column__txt">Telefono 999-999-999</p>
          <p className="column__txt">consulta@biatycs.com</p>
        </div>
        <div className="column column--33">
          <h2 className="column__title">Siguenos en nuestras redes</h2>
          <p className="column__txt">
            <a href="">
              <i class="fab fa-facebook-f"></i>Facebook
            </a>
          </p>
          <p class="column__txt">
            <a href="">
              <i class="fab fa-twitter"></i>Siguenos en Twitter
            </a>
          </p>
          <p class="column__txt">
            <a href="">
              <i class="fab fa-youtube"></i>Visita nuestro canal
            </a>
          </p>
        </div>
        <p className="copy">
          &copy; 2022 Professional Solutions | Todos lo derechos reservados
        </p>
      </div>
    </footer>
  );
}

export default PiePagina