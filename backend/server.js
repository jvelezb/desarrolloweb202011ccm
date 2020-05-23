//puerta de entrada a mi aplicacion de express
//importamos todos paquetes que necesitamos
var express = require("express");
var app = express();

var bodyParser = require("body-parser");
var morgan = require("morgan");
var mongoose = require("mongoose"); //mongoose
var Alumno = require("./models/alumnos");

//// configurar la conexion a mi base de datos
const uri =
  "mongodb+srv://dbuser:tvbl6u1m@webapp-pcil7.mongodb.net/webCCM?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

//configurar mi aplicación de node con express
app.use(morgan("dev")); //envir las peticiones y errores a la consola
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Establecer la conexion de base de datos
var db = mongoose.connection;
db.on(
  "error",
  console.error.bind(console, "problema de conexion con al base de datos")
);
db.once("openUri", function () {
  console.log("se estableció la conexion a base de datos");
});

var puertoHTTP = process.env.PORT || 8081; // que no se el mismo de angular (4800) servidor de angular servidor de express

var router = express.Router(); // devuelve un objeto de router de express

router.use(function (req, res, next) {
  console.log("entrando al API");
  next();
});

router.get("/", function (req, res) {
  res.json({ mensaje: "Saludos desde zoom y nuestro primer API" });
});
//declaracion de API para alumnos

router.route("/alumnos").post(function (req, resp) {
  var alumno = new Alumno();
  alumno.name = req.body.name;
  alumno.apellido = req.body.apellido;
  alumno.matricula = req.body.matricula;

  alumno.save(function (err) {
    if (err) {
      console.log(err);
      resp.send(err);
    }
    resp.json({ mensaje: "Alumno creado" });
  });
});

//registrar las routes
app.use("/api", router); //todas los recursos empezaran con http;//localhost:8080/api/

app.listen(puertoHTTP);
console.log("se ha levantado la aplicacion en el puerto " + puertoHTTP);
