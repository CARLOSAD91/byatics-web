import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageLand from "../pages/PageLand";
import Portafolio from "../layout/Portafolio"
import About from "../components/Portafolio/About";
import Home from "../components/Portafolio/Home";
import Services from "../components/Portafolio/Services";
import Contact from "../components/Portafolio/Contact";
import Login from "../pages/Login";
import Private from "../layout/Private";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLand />} />
        <Route path="/login" element={<Login />} />
        <Route  element={<Private />} />
        <Route path="/portafolio" element={<Portafolio />}>
          <Route path="/portafolio" element={<Home />} />
          <Route path="/portafolio/about" element={<About />} />
          <Route path="/portafolio/services" element={<Services />} />
          <Route path="/portafolio/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
