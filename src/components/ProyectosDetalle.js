import { useState } from "react";
import { Button, Dialog, DialogContent, Grid } from "@mui/material";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";

const ProyectosDetalle = ({ project }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setOpen(true)} variant="outlined" color="success">
        <MenuOpenIcon />
      </Button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        fullWidth={"md"}
        maxWidth={"md"}
      >
        <DialogContent>
          <div className="visualizar">
            <Grid container>
              <Grid md>
                <p>{project.nombre}</p>
                <p>{project.descripcion}</p>
                <p>{project.cliente}</p>
              </Grid>
              <Grid>
                <p>{project.tipo}</p>
                <p>{project.date_init}</p>
                <p>{project.date_end}</p>
              </Grid>
            </Grid>
          </div>
          <Button
            color="error"
            variant="outlined"
            onClick={() => setOpen(false)}
          >
            <DeleteForeverRoundedIcon />
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProyectosDetalle;
