import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";


const Home = () => {
  
  const { removeUser } = useContext(UserContext);

   const handleDelete = () => {
     removeUser();
   };
  return (
    <header>
      <nav class="menu">
        <span id="btnmenu">
          <i class="fas fa-bars"></i>
        </span>
        <ul class="menu_link">
          <li>
            <a href="/">Inicio</a>
          </li>
          <li>
            <a href="#sobre-nosotros">Acerca de</a>
          </li>
          <li>
            <a href="#conocenos">Conocenos</a>
          </li>
          <li>
            <a href="#portafolio">Portafolio</a>
          </li>
          <li>
            <a href="#about-services">Servicios</a>
          </li>
          <li>
            <a href="#contacto">Contacto</a>
          </li>
          <li>
            <a onClick={handleDelete} href="/login" target="_blank">
              <SupervisorAccountIcon />
            </a>
          </li>
        </ul>
      </nav>
      <section class="textos-header">
        <h1>BIATYCS SMART SOLUTIONS</h1>
        <h2>Juntos transformaremos el mundo.</h2>
      </section>
      <div className="wave primary">
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          className="secondary"
        >
          <path
            d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
            className="terces"
          ></path>
        </svg>
      </div>
    </header>
  );
}

export default Home