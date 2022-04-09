import React from "react";
import { Grid } from "@mui/material";

const PowerBI = () => {
  return (
    <Grid container>
      <Grid item md={12} sm={12} xs={12}>
        <iframe
          className="div-iframe"
          width="110%"
          title="1.BI_DEMO_INCOME_STATEMENT - Inicio"
          src="https://app.powerbi.com/view?r=eyJrIjoiMDdkZTBkYmMtZmY2NS00MzgxLThlZmQtMDg2YjkxMDM2YzY3IiwidCI6IjRhNzAwMTRmLTM3NWMtNDE0My04Y2I2LThhN2NjYjUwNzMwMCIsImMiOjR9"
          frameborder="0"
          allowFullScreen="true"
        ></iframe>
      </Grid>
    </Grid>
  );
};

export default PowerBI;
