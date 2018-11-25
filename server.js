const path     = require('path');
const express  = require('express');
const mongoose = require('mongoose');
const routes   = require('./routes');
const config   = require('./config');

const app      = express();

// --------------------- Conexión a Base de Datos
mongoose.connect(config.db_uri, { useNewUrlParser: true })
  .then(db   => console.log ('Conexión correcta a la BD'))
  .catch(err => console.log ('Error en la conexión a la BD'));

// --------------------- Middleware
// Archivos estáticos
app.use(express.static(path.join(__dirname , 'public')));
// Soporte de JSON
app.use(express.json());
// Rutas
app.use ('/api',  routes);

// --------------------- Inicio del Servidor web
app.listen (config.port, () => console.log(`Servidor iniciado en puerto ${config.port}`));
