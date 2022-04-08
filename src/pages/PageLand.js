import React from "react";
import Conocenos from "../components/PageLand/Conocenos";
import Contactanos from "../components/PageLand/Contactanos";

import Home from "../components/PageLand/Home";
import NuestrosClientes from "../components/PageLand/NuestrosClientes";
import NuestrosServicios from "../components/PageLand/NuestrosServicios";
import NuestrosTrabajos from "../components/PageLand/NuestrosTrabajos";
import PiePagina from "../components/PageLand/PiePagina";
import SobreNosotros from "../components/PageLand/SobreNosotros";
import './css/PageLand.css'

const PageLand = () => {
  return (
    <div>
      <div>
        <Home />
      </div>
      <div>
        <SobreNosotros />
      </div>
      <div>
        <Conocenos/>
      </div>
      <div>
        <NuestrosTrabajos />
      </div>
      <div>
        <NuestrosClientes/>
      </div>
      <div>
        <NuestrosServicios/>
      </div>
      <div>
        <Contactanos/>
      </div>
      <div>
        <PiePagina/>
      </div>
    </div>
  );
};

export default PageLand;
