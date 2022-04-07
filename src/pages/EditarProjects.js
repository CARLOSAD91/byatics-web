import Formulario from "../components/Formulario";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProjects } from "../services/firestores";

const EditarProjects = () => {
  const { id } = useParams();
  const [projectedit, setProjectEdit] = useState({});

  const fetchFilterAPI = async (id) => {
    const data = await getProjects();
    const datafiler = data.filter((project) => project.id === id);
    setProjectEdit(datafiler[0]);
  };

  useEffect(() => {
    fetchFilterAPI(id);
  }, [id]);

  return (
    <div>
      <h1 className="title">Editar un Proyecto</h1>
      <p className="text-title">Modifica los siguientes campos:</p>
      <Formulario projectedit={projectedit} />
    </div>
  );
};

export default EditarProjects;
