import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PageLand from "../pages/PageLand";
import Portafolio from "../layout/Portafolio"
import About from "../components/Portafolio/About";
import Home from "../components/Portafolio/Home";
import Services from "../components/Portafolio/Services";
import Contact from "../components/Portafolio/Contact";
import Login from "../pages/Login";
import Private from "../layout/Private";
import ProjectNav from "../layout/ProjectNav";
import AdminProjects from "../pages/AdminProjects";
import EditarProjects from "../pages/EditarProjects";
import NuevoProjects from "../pages/NuevoProjects";
import Dashboard from "../layout/Dashboard";
import Tableau from "../components/Tableau";
import PowerBI from "../components/PowerBI";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLand />} />
        <Route path="/login" element={<Login />} />
        <Route element={<Private />}>
          <Route path="/proyectos" element={<ProjectNav />}>
            <Route
              path="/proyectos/administrador"
              element={<AdminProjects />}
            />
            <Route path="/proyectos/editar/:id" element={<EditarProjects />} />
            <Route path="/proyectos/nuevo" element={<NuevoProjects />} />
          </Route>
        </Route>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="/dashboard/tableua" element={<Tableau />} />
          <Route path="/dashboard/powerbi" element={<PowerBI />} />
        </Route>
        <Route path="/portafolio" element={<Portafolio />}>
          <Route path="/portafolio" element={<Home />} />
          <Route path="/portafolio/about" element={<About />} />
          <Route path="/portafolio/services" element={<Services />} />
          <Route path="/portafolio/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Route>
        <Route path="/*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
