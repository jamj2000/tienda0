const express = require('express');
const Tarea   = require('../models/Tarea');

const router  = express.Router();


// index. ver todas las tareas
router.get('/', function(req, res) {
  Tarea.find( {}, (err, data) => {
    if (err) res.json ({error: err});
    else     res.json (data);
  });
});

// ver una tarea 
router.get('/:id', (req, res) => {
    Tarea.findOne( {_id: req.params.id}, (err, data) => {
      if (err) res.json ({error: err});
      else     res.json (data);
    });
});
  

// eliminar tarea
router.delete('/:id', (req, res) => {
    Tarea.findOneAndRemove( {_id: req.params.id }, (err, data) => {
        if (err) res.json ({error: err});
        else     res.json (data);
      });
});


// insertar tarea
router.post('/',  (req, res) => {
    const tarea = new Tarea({ nombre: req.body.nombre, descripcion: req.body.descripcion });
    tarea.save( (err, data) => {
        if (err) res.json ({error: err});
        else     res.json (data);   
    });  
});


router.put('/:id',  (req, res) => {
    //const tarea = new Tarea({ nombre: req.body.nombre, descripcion: req.body.descripcion });
    Tarea.findOneAndUpdate( {_id: req.params.id }, {$set: {nombre: req.body.nombre, descripcion: req.body.descripcion} }, (err, data) => {
        if (err) res.json ({error: err});
        else     res.json (data);
      });
});





module.exports = router;