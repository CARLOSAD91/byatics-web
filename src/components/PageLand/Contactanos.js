import React from 'react'

const Contactanos = () => {
  return (
    <section className="group contact contenedor" id="contacto">
      <h2 className="titulo">Contáctenos</h2>
      <div className="container container--flex">
        <div className="contact-information column column--50">
          <h3 className="column__title">Informacion de Contacto</h3>
          <p className="column__txt">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi odio
            obcaecati explicabo totam blanditiis culpa et, iure nam ullam natus
            similique, consectetur enim inventore corporis id deleniti magni
            nemo modi.
          </p>
          <p className="column__txt">
            <span>
              <i class="fas fa-phone-alt"></i>
            </span>
            999-999-999
          </p>
          <p className="column__txt">
            <span>
              <i class="fas fa-phone-alt"></i>
            </span>
            999-999-999
          </p>
          <p className="column__txt">
            <span>
              <i class="fas fa-map-marker-alt"></i>Lima-Perú
            </span>
          </p>
          <p className="column__txt">
            <span>
              <i class="fas fa-envelope"></i>
            </span>
            contacto@biatycs.com
          </p>
          <div className="social-icon">
            <a href="/" className="social-icon__link">
              <span>
                <i class="fab fa-facebook-f"></i>
              </span>
            </a>
            <a href="/" className="social-icon__link">
              <span>
                <i class="fab fa-twitter"></i>
              </span>
            </a>
            <a href="/" className="social-icon__link">
              <span>
                <i class="fas fa-envelope"></i>
              </span>
            </a>
          </div>
        </div>

        <form action="" method="POST" class="formulario column column--50">
          <label for="" class="formulario__label">
            Nombre:
          </label>
          <input type="text" class="formulario__input-txt" name="nombre" />
          <label for="" class="formulario__label">
            Correo:
          </label>
          <input type="text" class="formulario__input-txt" name="correo" />
          <label for="" class="formulario__label">
            Teléfono:
          </label>
          <input type="text" class="formulario__input-txt" name="telefono" />
          <label for="" class="formulario__label">
            Mensaje:
          </label>
          <textarea
            name="mensaje"
            id=""
            cols="30"
            rows="10"
            class="formulario__textarea"
          ></textarea>
          <input type="submit" value="Enviar" class="btn formulario__btn" />
        </form>
      </div>
    </section>
  );
}

export default Contactanos