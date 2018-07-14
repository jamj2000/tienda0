const mongoose = require('mongoose');

const Tarea = mongoose.model('Tarea', { nombre: String, descripcion: String });

module.exports = Tarea;