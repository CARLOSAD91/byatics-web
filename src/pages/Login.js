import { Button, Grid, Card, TextField, CardContent } from "@mui/material";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import Error from "../components/Error";
import swal from "sweetalert";
import "./css/login.css"

const Login = () => {
  const { storeUser } = useContext(UserContext);
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const { email, password } = values;

  const handleChangeInput = (e) => {
    const { value, name } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleClickLogin = () => {
    if ([email, password].includes("")) {
      setError(true);
      return;
    }
    setError(false);

    if (values.email === "pepe@mail.com" && values.password === "123456") {
      const user = {
        nombre: "pepe",
        apellido: "Zapata",
        correo: "pepe@mail.com",
        edad: 21,
        trabajo: "Software Developer",
        dni: "12234234234",
      };
      storeUser(user);
      navigate("/projecto");
    } else {
      swal({
        icon: "error",
        title: "Error",
        text: "Email o Contraseña",
      });
    }
  };

  return (
    <Grid className="form-login-uno">
      <div className="text-center">
        {error && (
          <Error>
            <p className="error-type"> Todo los campos son obligatorios</p>
          </Error>
        )}
        <h6>
          <span>Log In</span> <span>Sign Up</span>{" "}
        </h6>
        <input type="checkbox" className="checkbox" id="reg-log" />
        <label for="reg-log"></label>
        <Grid container class="card-3d-wrap">
          <Grid item md={12} class="card-3d-wrapper">
            <Card class="card-font">
              <CardContent class="center-wrap">
                <h4 class="heading">Log In</h4>
                <div class="form-group">
                  <TextField
                    type="email"
                    name="email"
                    className="form-style"
                    placeholder="Your Email"
                    onChange={handleChangeInput}
                  />
                  <i class="input-icon material-icons">alternate_email</i>
                </div>
                <div class="form-group">
                  <TextField
                    type="password"
                    name="password"
                    class="form-style"
                    placeholder="Your Password"
                    fullWidth
                    onChange={handleChangeInput}
                  />
                  <i class="input-icon material-icons">lock</i>
                </div>
                <Button
                  type="submit"
                  class="btn-new-login"
                  onClick={handleClickLogin}
                >
                  submit
                </Button>
                <p class="text-center">
                  <a href="/" class="link">
                    Forget your Password
                  </a>
                </p>
              </CardContent>
            </Card>

            <Card class="card-back">
              <CardContent class="center-wrap">
                <h4 class="heading">Sign Up</h4>
                <Grid item md={12} class="form-group">
                  <TextField
                    type="email"
                    name="fullname"
                    class="form-style"
                    placeholder="Full Name"
                    fullWidth
                    onChange={handleChangeInput}
                  />
                  <i class="input-icon material-icons">accessibility</i>
                </Grid>
                <Grid item md={12} class="form-group">
                  <TextField
                    type="email"
                    name="email"
                    class="form-style"
                    placeholder="Your Email"
                    fullWidth
                    onChange={handleChangeInput}
                  />
                  <i class="input-icon material-icons">alternate_email</i>
                </Grid>
                <Grid item md={12} class="form-group">
                  <TextField
                    type="password"
                    name="password"
                    class="form-style"
                    placeholder="Your Password"
                    fullWidth
                    onChange={handleChangeInput}
                  />
                  <i class="input-icon material-icons">lock</i>
                </Grid>
                <Button
                  type="submit"
                  class="btn-new-login"
                  onClick={handleClickLogin}
                >
                  submit
                </Button>
                <p class="text-center link">
                 
                </p>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </Grid>
  );
};

export default Login;
