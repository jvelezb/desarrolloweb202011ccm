var mongoose = require('mongoose');
var Schema =mongoose.Schema;

var AlumnoShema = new Schema({
    name: String,
    apellido: String,
    matricula: String
});

module.exports = mongoose.model('Alumno', AlumnoShema);