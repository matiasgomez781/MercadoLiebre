const express = require("express");

const app = express();

const path = require("path");

app.use(express.static("public"));

app.listen(3030, () => console.log("Servidor iniciado"));

/*Ruta Home*/
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/home.html"));
});