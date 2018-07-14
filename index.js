const express  = require('express');
const mongoose = require('mongoose');
const path     = require('path');
const tareas   = require('./routers/tareas');

const app      = express();


mongoose.connect('mongodb://localhost:27017/prueba')
  .then(
    ()  => console.log ('Conexión correcta a la BD'),
    err => console.log ('Error en la conexión a la BD')
  );


// midleware
app.use(express.json());

// Rutas
app.use ('/tareas', tareas);

// Archivos estáticos
app.use(express.static(path.join(__dirname , 'public')));

// Servidor
const server = app.listen (3000, ()=> console.log(`Servidor iniciado en puerto 3000`));