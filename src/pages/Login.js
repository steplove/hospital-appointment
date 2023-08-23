import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// ES6 Modules or TypeScript
import Swal from "sweetalert2";
import logo from "../images/unnamed.png";
import { Image } from "react-bootstrap";
import { BASE_URL } from "../constants/constants";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"© สงวนลิขสิทธิ์ "}
      {new Date().getFullYear()}
      {" บริษัท บางกอก เชน ฮอสปิทอล จำกัด (มหาชน) "}
    </Typography>
  );
}
const defaultTheme = createTheme();

export default function Login() {
  
  const Swal = require("sweetalert2");
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const jsonData = {
      identificationNumber: data.get("identificationNumber"),
      password: data.get("password"),
    };
    fetch(BASE_URL + "/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jsonData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "ok") {
          Swal.fire("เข้าสู่ระบบสำเร็จ", "ยินดีต้อนรับเข้าสู่ ", "success").then(
            () => {
              localStorage.setItem("token", data.token);
              localStorage.setItem("identificationNumber", data.identificationNumber);
              window.location = "/Medical";
            }
          );
        } else {
          Swal.fire({
            icon: "error",
            title: "ชื่อผู้ใช้หรือพาสเวอร์ดไม่ถูกต้อง",
            text: "กรุณากรอกข้อมูลใหม่อีกครั้ง",
          });
        }
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
         <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://source.unsplash.com/random?wallpapers)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 2,width: 70, height: 70 }}>
            <Image src={logo} rounded style={{ with: "70px", height: "70px" }} />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="identificationNumber"
                label="identificationNumber"
                name="identificationNumber"
                autoComplete="identificationNumber"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/Register" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
