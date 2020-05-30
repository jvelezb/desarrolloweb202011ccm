//puerta de entrada a mi aplicacion de express
//importamos todos paquetes que necesitamos
var express = require("express");
var app = express();

var jwt = require("express-jwt"); //Soporte para JWT
var jwksRsa = require("jwks-rsa"); //metodo de authentication

const cors = require("cors"); //importar cors para su uso

var bodyParser = require("body-parser");
var morgan = require("morgan");
var mongoose = require("mongoose"); //mongoose
var Alumno = require("./models/alumnos");
var Clase = require("./models/clase");

const authConfig = {
  domain: "dev-qz51ohsc.auth0.com",
  audience: "S7G4Uz1fN3hi8Csr3HrQzpM0nOdFpvZW",
};

const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${authConfig.domain}/.well-known/jwks.json`,
  }),
  audience: authConfig.audience,
  algorithm: ["RSA256"],
});

//// configurar la conexion a mi base de datos
const uri =
  "mongodb+srv://dbuser:tvbl6u1m@webapp-pcil7.mongodb.net/webCCM?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

//configurar mi aplicación de node con express
app.use(morgan("dev")); //envir las peticiones y errores a la consola
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//configurar cors para la aplicacion
var corsOptions = {
  origin: "*",
  optionSuccessStatus: 200, // soporte para browser no soportados para IE
};

app.use(cors(corsOptions));

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
  ///todas peticiones api y las redirige a las su operacion
  console.log("entrando al API");
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

router.get("/", checkJwt, function (req, res) {
  res.json({ mensaje: "Saludos desde zoom y nuestro primer API" });
});
//declaracion de API para alumnos

router
  .route("/alumnos")
  .post(async function (req, resp) {
    var alumno = new Alumno();
    alumno.name = req.body.name;
    alumno.apellido = req.body.apellido;
    alumno.matricula = req.body.matricula;
    alumno.carrera = req.body.carrera;
    alumno.email = req.body.email;
    if (alumno.email == "") {
      resp.status(400).send({ error: "el email esta vacio" });
      return;
    }
    try {
      await alumno.save(function (err) {
        if (err) {
          console.log(err);
          resp.status(500).send({ mensaje: err.message });
          return;
        }
        resp.status(200).json({ mensaje: "Alumno creado" });
        return;
      });
    } catch (error) {
      if (error.name == "ValidationError") {
        resp.status(400).send({ mensaje: error.message });
      } else {
        resp.status(500).send({ mensaje: error });
      }

      return;
    }
  })
  .get(checkJwt, function (req, resp) {
    Alumno.find(function (err, alumnos) {
      if (err) {
        resp.status(500).send(err);
        return;
      }
      resp.status(200).send(alumnos);
      return;
    });
    /* limiteStr = req.body.limite;
    if (limiteStr == "" || !limiteStr) {
      limite = 10;
    } else {
      limite = parseInt(limiteStr);
    }
    nombre = req.body.name;
    console.log(nombre);
    console.log(limite);*/
    /* if (nombre != "" || !nombre) {
     
    } else if (nombre == "" || !nombre) {
      Alumno.find(function (err, alumnos) {
        if (err) {
          resp.status(500).send(err);
          return;
        }
        resp.status(200).send(alumnos);
        return;
      });
    } else {
      Alumno.find(function (err, alumnos) {
        if (err) {
          resp.status(500).send(err);
          return;
        }
        resp.status(200).send(alumnos);
        return;
      }).limit(limite);
    }*/
  });

router
  .route("/alumnos/:id_alumno")
  .get(function (req, res) {
    Alumno.findById(req.params.id_alumno, function (error, alumno) {
      if (error) {
        res.status(404).send({ mensaje: "Alumno no encontrado" });

        return;
      }
      if (alumno == null) {
        res.status(404).send({ mensaje: "Id no es de un alumno" });
        return;
      }
      res.status(200).send(alumno);
    });
  })
  .put(function (req, res) {
    Alumno.findById(req.params.id_alumno, function (error, alumno) {
      if (error) {
        res.status(404).send({ mensaje: "Alumno no encontrado" });

        return;
      }
      if (alumno == null) {
        res.status(404).send({ mensaje: "Id no es de un alumno" });
        return;
      }
      alumno.name = req.body.name;
      alumno.apellido = req.body.apellido;
      alumno.carrera = req.body.carrera;
      alumno.email = req.body.email;
      alumno.save(function (err) {
        if (err) {
          res.status(500).send(err);
          return;
        }
        res.status(202).send({ mensaje: "actualizado" });
      });
    });
  })
  .delete(function (req, res) {
    Alumno.deleteOne({ _id: req.params.id_alumno }, function (err, alumno) {
      if (err) {
        res.send(error);
      }
      res.status(200).json({ mensaje: "borrado con exitos" });
    });
  });

router
  .route("/clases")
  .post(async function (req, res) {
    var clase = new Clase();
    clase.nombre = req.body.nombre;
    clase.semestre = req.body.semestre;
    try {
      await clase.save(function (err) {
        if (err) {
          console.log(err);
          if (err.name == "ValidationError")
            res.status(400).send({ error: err.message });
        }
      });
      res.json({ mensaje: "Clase creado" });
    } catch (error) {
      res.status(500).send({ error: error });
    }
  })
  .get(function (req, resp) {
    limite = parseInt(req.body.limite);
    nombre = req.body.name;
    if (nombre != "" || nombre == null) {
      Clase.find({ nombre: nombre }, function (err, clases) {
        if (err) {
          resp.status(500).send(err);
        }
        resp.status(200).send(clases);
        return;
      });
    } else {
      Clase.find(function (err, clases) {
        if (err) {
          resp.status(500).send(err);
        }
        resp.status(200).send(clases);
        return;
      }).limit(limite);
    }
  });

//registrar las routes
app.use("/api", router); //todas los recursos empezaran con http;//localhost:8080/api/

app.listen(puertoHTTP);
console.log("se ha levantado la aplicacion en el puerto " + puertoHTTP);
