import React from "react";
import {  Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";
import avata1 from "../../assets/avatar1.png";
import avata2 from "../../assets/avatar2.png";
import avata3 from "../../assets/avatar3.png";

const Conocenos = () => {
  return (
    <div className="conocenos-main" id="conocenos">
      <Grid container spacing={4}>
        <Grid item md={12} xs={12} textAlign="center" p={4} m={3}>
          <h1 className="title_teams_main">Nuestro Equipo</h1>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item md={4} textAlign="center">
          <h3 className="title_teams">Carlos A.</h3>
          <div ClassName="container-img">
            <img src={avata1} alt="" />
          </div>
          <div>
            <p className="text-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              totam ad laboriosam in veritatis perferendis obcaecati alias nulla
              soluta ducimus voluptate quibusdam esse earum, enim,
              exercitationem consequuntur magnam eius? Natus.
            </p>
            <Link className="link-conocenos" to="/portafolio" target="_blank">
              <Button variant="outlined" color="error">
                Detalle
              </Button>
            </Link>
          </div>
        </Grid>
        <Grid item md={4} textAlign="center">
          <h3 className="title_teams">Walter A.</h3>
          <div ClassName="container-img">
            <img src={avata2} alt="" />
          </div>
          <div>
            <p className="text-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              totam ad laboriosam in veritatis perferendis obcaecati alias nulla
              soluta ducimus voluptate quibusdam esse earum, enim,
              exercitationem consequuntur magnam eius? Natus.
            </p>
            <Link className="link-conocenos" to="/portafolio" target="_blank">
              <Button variant="outlined" color="error">
                Detalle
              </Button>
            </Link>
          </div>
        </Grid>
        <Grid item md={4} textAlign="center">
          <h3 className="title_teams">Uriel A.</h3>
          <div ClassName="container-img">
            <img src={avata3} alt="" />
          </div>
          <div>
            <p className="text-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              totam ad laboriosam in veritatis perferendis obcaecati alias nulla
              soluta ducimus voluptate quibusdam esse earum, enim,
              exercitationem consequuntur magnam eius? Natus.
            </p>
            <Link className="link-conocenos" to="/portafolio" target="_blank">
              <Button variant="outlined" color="error">
                Detalle
              </Button>
            </Link>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Conocenos;
