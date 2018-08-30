// El primer valor es el de PRODUCCIÓN. El valor alternativo es el de DESARROLLO
// En DESARROLLO sustituye mongo:27017 por tu configuración local: localhost:27017 
//   o servidor:27017

module.exports = {
  ip         : process.env.HOST   || '0.0.0.0',
  port       : process.env.PORT   || 3000,
  db_uri     : process.env.DB_URI || 'mongodb://mongo:27017/tienda'
};