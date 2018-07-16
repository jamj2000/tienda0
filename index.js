const express  = require('express');
const mongoose = require('mongoose');
const path     = require('path');
const socketio = require('socket.io');
const tareas   = require('./routers/tareas');

const app      = express();

// mongoose.connect('mongodb://localhost:27017/prueba')
//   .then(
//     ()  => console.log ('Conexión correcta a la BD'),
//     err => console.log ('Error en la conexión a la BD')
//   );

mongoose.connect('mongodb://localhost:27017/prueba')
  .then(db   => console.log ('Conexión correcta a la BD'))
  .catch(err => console.log ('Error en la conexión a la BD'));

  
// Middleware
app.use(express.json());

// Rutas
app.use ('/tareas', tareas);

// Archivos estáticos
app.use(express.static(path.join(__dirname , 'public')));

// Servidor
const server = app.listen (3000, () => console.log(`Servidor iniciado en puerto 3000`));


// const io     = socketio.listen (server);

// io.on('connection', (socket) => { 
//     console.log (`- Nueva conexión en tiempo real ${socket.id}`) 
    
//     socket.emit ('saludo', { mensaje: 'Hola desde el servidor'} );
    
//     socket.on ('cambio en BD', (data) => { 
//       console.log(data) 
//       //io.sockets.emit(data);
//     });
   
// });