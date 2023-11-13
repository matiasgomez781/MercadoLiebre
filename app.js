const express = require("express");

const app = express();

const path = require("path");

app.use(express.static("public"));

app.listen(3030, () => console.log("Servidor iniciado"));

/*Ruta Home*/
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/home.html"));
});

/*Ruta Registro*/
app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/register.html"));
});

/*Ruta Login*/
app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/login.html"));
});

/*Post para formulario - Regresa al home*/
app.post("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/home.html"));
});