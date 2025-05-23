const express = require("express");
require("dotenv").config();
const cors = require("cors");

const app = express();

// CORS
app.use(cors());

//Directorio Publico
app.use(express.static("public"));

// Lectura y parseo del body
app.use(express.json());

//Rutas
app.listen(process.env.NODE_PORT || 3000, () => {
  console.log("Servidor corriendo en el puerto", process.env.NODE_PORT || 3000);
});

const {router:authRouter} = require('./Routes/auth');
const {router:usersRouter} = require('./Routes/users');
const {router:salonsRouter} = require('./Routes/salons');
const {router:eventsRouter} = require('./Routes/events');
// const {router:paymentsRouter} = require('./Routes/payments');
// const {router:employeesRouter} = require('./Routes/employees');
// const {router:inventoryRouter} = require('./Routes/inventory');
// const {router:adminRouter} = require('./Routes/admin');

app.use('/auth/', authRouter);
app.use('/users/', usersRouter);
app.use('/salons/', salonsRouter);
app.use('/events/', eventsRouter);
// app.use('/payments/', paymentsRouter);
// app.use('/employees/', employeesRouter);
// app.use('/inventory/', inventoryRouter);
// app.use('/admin/', adminRouter);