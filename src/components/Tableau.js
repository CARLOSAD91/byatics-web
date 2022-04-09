import React, { useRef, useEffect } from "react";
import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";

const { tableau } = window;

function Tableau() {
  const ref = useRef(null);
  const url =
    "https://public.tableau.com/views/CULTIVOS_16486998334180/CULTIVOS";

  function initViz() {
    new tableau.Viz(ref.current, url);
  }

  useEffect(() => {
    initViz();
  }, []);
  return (
    <Container>
      <Grid container>
        <Grid maxWidth="100%" item md={12} sm={12} xs={12} sx={{ height: "80vh" }}>
          <div className="tableau-main">
            <h1>Tableau</h1>
            <div className="dashboard-tableau" ref={ref}></div>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Tableau;
