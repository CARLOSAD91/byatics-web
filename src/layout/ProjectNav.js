import React from 'react'
import { Link, Outlet } from "react-router-dom";
import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
} from "@mui/material";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import adminlog from "../assets/img/adminlogo.png";
import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";

const ProjectNav = () => {
  return (
    <div className="project-layout">
      <Box m={3}>
        <Grid container spacing={3}>
          <Grid item md={2} sm={12} sx={12} className="border-right">
            <div className="m-5">
              <div className="container-admin-logo">
                <div>
                  <img src={adminlog} width={50} alt="logo" />
                </div>
                &nbsp;&nbsp;
                <div>
                  <h4>Byatics Project</h4>
                  <p>Projectos de Byatics</p>
                </div>
              </div>
              <div className="mt-5">
                <List>
                  <ListItem button component={Link} to="/proyectos/administrador">
                    <ListItemIcon>
                      <HomeRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Admin" />
                  </ListItem>
                  <ListItem button component={Link} to="/proyectos/nuevo">
                    <ListItemIcon>
                      <AddBusinessRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Add" />
                  </ListItem>
                </List>
                <Box m={3} mr={5}>
                  <Divider />
                </Box>
              </div>
            </div>
          </Grid>
          <Grid item md={10} sm={6} sx={6}>
            <Outlet />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default ProjectNav