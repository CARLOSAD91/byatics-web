import React from "react";
import Formulario from "../components/Formulario";
import { Container, Grid } from "@mui/material";

const NuevoProjects = () => {
  return (
    <Container>
      <Grid container>
        <Grid item md={12}>
          <h1 className="title">Nuevo projecto</h1>
          <p className="text-title">
            Llena los siguientes campos para crear un nuevo projecto
          </p>
          <Formulario />
        </Grid>
      </Grid>
    </Container>
  );
};

export default NuevoProjects;
