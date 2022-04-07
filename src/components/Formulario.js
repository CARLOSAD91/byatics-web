import { useEffect, useState } from "react";
import {
  TextField,
  Button,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Container,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Error from "../components/Error";
import { useNavigate } from "react-router-dom";
import { storeProyect, updateProyectos } from "../services/firestores";
import swal from "sweetalert";

const Formulario = ({ projectedit }) => {
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const [project, setProject] = useState({
    nombre: projectedit?.nombre ?? "",
    descripcion: projectedit?.descripcion ?? "",
    cliente: projectedit?.cliente ?? "",
    tipo: projectedit?.tipo ?? "",
    date_init: projectedit?.date_init ?? "",
    date_end: projectedit?.date_end ?? "",
  });

  useEffect(() => {
    if (projectedit) {
      setProject(projectedit);
    }
  }, [projectedit]);

  const { nombre, descripcion, cliente, tipo, date_init, date_end } = project;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject({
      ...project,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    if (
      [nombre, descripcion, cliente, tipo, date_init, date_end].includes("")
    ) {
      setError(true);
      return;
    }
    setError(false);

    if (projectedit) {
      await updateProyectos(project);
      swal({
        text: "Update successfully",
        icon: "success",
        title: "Success",
      });
    } else {
      await storeProyect(project);
      swal({
        text: "Se creo correctamente",
        icon: "success",
        title: "Success",
      });
    }

    navigate("/proyectos/administrador");
    setProject({
      nombre: "",
      descripcion: "",
      cliente: "",
      tipo: "",
      date_init: "",
      date_end: "",
    });
  };

  return (
    <Container>
      <Grid container>
        <Grid item xs={12}>
          {error && (
            <Error>
              <p className="error-type"> Todo los campos son obligatorios</p>
            </Error>
          )}
          <div className="grow">
            <InputLabel sx={{ paddingBottom: 1 }}>
              Nombre del Proyecto
            </InputLabel>
            <TextField
              id="outlined-basic"
              name="nombre"
              variant="outlined"
              value={project.nombre}
              fullWidth
              onChange={handleChange}
            />
          </div>
          <div className="grow">
            <InputLabel sx={{ paddingBottom: 1 }}>
              Descripacion del Proyecto
            </InputLabel>
            <TextField
              id="outlined-basic"
              name="descripcion"
              variant="outlined"
              value={project.descripcion}
              fullWidth
              onChange={handleChange}
            />
          </div>
          <div className="grow">
            <InputLabel sx={{ paddingBottom: 1 }}>Cliente</InputLabel>
            <TextField
              id="outlined-basic"
              name="cliente"
              value={project.cliente}
              variant="outlined"
              onChange={handleChange}
              fullWidth
            />
          </div>
          <div className="grow">
            <InputLabel sx={{ paddingBottom: 1 }}>Tipo de Proyecto</InputLabel>
            <FormControl fullWidth>
              <Select name="tipo" value={project.tipo} onChange={handleChange}>
                <MenuItem value="landpage">Land Page</MenuItem>
                <MenuItem value="ecommerce">Ecommerce</MenuItem>
                <MenuItem value="dashboard">dashboard</MenuItem>
                <MenuItem value="admin">Admininistrador</MenuItem>
                <MenuItem value="powerbi">Power BI</MenuItem>
                <MenuItem value="tableaut">tableau</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="grow">
            <InputLabel sx={{ paddingBottom: 1 }}>Fecha Inicio</InputLabel>
            <TextField
              type="date"
              name="date_init"
              fullWidth
              value={project.date_init}
              onChange={handleChange}
            />
          </div>
          <div className="grow">
            <InputLabel sx={{ paddingBottom: 1 }}>Fecha Final</InputLabel>
            <TextField
              type="date"
              name="date_end"
              value={project.date_end}
              fullWidth
              onChange={handleChange}
            />
          </div>
          <div className="grow">
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              color="primary"
              type="submit"
              fullWidth
              onClick={handleSubmit}
            >
              {projectedit ? "Editar" : "Crear"}
            </Button>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Formulario;
