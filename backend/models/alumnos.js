var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var AlumnoShema = new Schema({
  name: String,
  apellido: String,
  matricula: {
    type: String,
    require: true,
  },
  carrera: String,
  email: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Alumno", AlumnoShema);
