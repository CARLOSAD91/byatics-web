import {
  Button,
  Grid,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import { useEffect, useState } from "react";
import ProyectosDetalle from "../components/ProyectosDetalle";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import swal from "sweetalert";
import {tableCellClasses } from "@mui/material/TableCell";
import { getProjects, deleteProyect } from "../services/firestores";

const AdminProjects = () => {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  const fetchAPI = async () => {
    const data = await getProjects();
    setProjects(data);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

 
  const eliminarProjecto = async (id) => {
    const response = await swal({
      title: "Esta seguro de eliminar?",
      text: "Recuerda que una vez eliminado no hay vuelta atras",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    });
    if (response) {
      await deleteProyect(id);

      await fetchAPI();
    }
  };

  return (
    <Container>
      <div>
        <h1 className="title">Lista tus Projectos</h1>
        <p className="text-title">Administra tus Proyectos</p>
      </div>
      <Grid container >
        <Grid item md={12} xs={8} sd={8}>
          <TableContainer component={Paper}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Nombre</StyledTableCell>
                  <StyledTableCell>Descripcion</StyledTableCell>
                  <StyledTableCell>Cliente</StyledTableCell>
                  <StyledTableCell>Tipo</StyledTableCell>
                  <StyledTableCell>Fecha Inicio</StyledTableCell>
                  <StyledTableCell>Accion</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {projects.map((project) => (
                  <TableRow key={project.id}>
                    <TableCell>{project.nombre}</TableCell>
                    <TableCell>{project.descripcion}</TableCell>
                    <TableCell>{project.cliente}</TableCell>
                    <TableCell>{project.tipo}</TableCell>
                    <TableCell>{project.date_init}</TableCell>
                    <TableCell>
                      <Button
                        color="info"
                        variant="outlined"
                        onClick={() =>
                          navigate(`/proyectos/editar/${project.id}`)
                        }
                      >
                        <EditRoundedIcon />
                      </Button>
                      <ProyectosDetalle project={project} />
                      <Button
                        color="error"
                        variant="outlined"
                        margin="dense"
                        onClick={() => eliminarProjecto(project.id)}
                      >
                        <DeleteForeverRoundedIcon />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AdminProjects;
