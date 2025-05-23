const express = require("express");
const mariadb = require('mariadb');
require("dotenv").config();
const cors = require("cors");

const app = express();

// CORS
app.use(cors());

// Base de datos
const pool = mariadb.createPool({
  host: 'localhost',
  user: 'root',
  password: process.env.DB_PASSWORD,
  connectionLimit: 5
});

pool.on("connection", () => console.log("Base de datos conectada!"));

app.get("/ping", async (req, res) => {
  const result = await pool.query("SELECT 1 as val");
  res.json(result[0]);
});

// Directorio Publico
app.use(express.static("public"));

// Lectura y parseo del body
app.use(express.json());

//Rutas
app.listen(process.env.NODE_PORT || 3000, () => {
  console.log("Servidor corriendo en el puerto", process.env.NODE_PORT || 3000);
});