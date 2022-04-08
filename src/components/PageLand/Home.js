import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { UserContext } from "../../context/UserContext";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";

const Home = () => {
  const { removeUser } = useContext(UserContext);
  const navigate = useNavigate();
   const handleDelete = () => {
     removeUser();
     navigate("/login");
   };
  return (
    <header>
      <nav className="menu_item">
        <a href="/">Inicio</a>
        <a href="#sobre-nosotros">Acerca de</a>
        <a href="#conocenos">conocenos</a>
        <a href="#portafolio">Portafolio</a>
        <a href="#about-services">Servicios</a>
        <a href="#contacto">Contacto</a>
        <Link to="/login">
          <Button onClick={handleDelete}>
            <SupervisorAccountIcon />
          </Button>
        </Link>
      </nav>
      <section className="textos-header">
        <h1>BIATYCS SMART SOLUTIONS</h1>
        <h2>Juntos transformaremos el mundo.</h2>
      </section>
    </header>
  );
}

export default Home