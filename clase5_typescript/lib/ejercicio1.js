var mensaje = "Hola a todos desde casa";
console.log(mensaje);
var mensaje = "Hola2";
let mensaje2 = "Mensaje2";
const pi = 3.1416;
var numero1 = 2;
2 ^ 64;
var numero2 = 12.3;
var numero3 = numero1 + numero2;
var boleanas = true;
var variablesVacias;
var varNulo;
var indefinido;
var numero4 = 3;
console.log(typeof (numero4));
numero4 = "juan";
console.log(typeof (numero4));
function suma(num1, num2) {
    return num1 + num2;
}
let resultado1 = suma(numero1, numero2);
console.log("Resultado1: " + resultado1);
var str1 = "2";
var numero5 = str1;
console.log(typeof (numero5));
var numero6 = +str1;
console.log(typeof numero6);
var arreglo = ["1", "Juan", "pedro"];
console.log("Arreglo" + arreglo[1]);
for (var i = 0; i < arreglo.length; i++) {
    console.log("For: " + arreglo[i]);
}
var indice;
for (indice in arreglo) {
    console.log(arreglo[indice]);
}
let frutas = ["manzana", "pera", "sandia"];
class SerHumano {
}
class Estudiante extends SerHumano {
    constructor(aMaterno, aPaterno, nombre) {
        super();
        this.aMaterno = aMaterno;
        this.aPaterno = aPaterno;
        this.nombre = nombre;
        this.nombre = aMaterno + " " + aPaterno + " " + nombre;
    }
}
var juan = new Estudiante("Velez", "Ballesteros", "Juan");
console.log("nombre: " + juan.nombre);
class Profesor extends SerHumano {
    constructor(clase, aMaterno, aPaterno) {
        super();
        this.clase = clase;
        this.aMaterno = aMaterno;
        this.aPaterno = aPaterno;
    }
}
var prof1 = new Profesor("DesarrolloWeb", "Velez", "Ballesteros");
function registro(persona) {
    return "se registro: " + persona.aMaterno + " " + persona.aPaterno;
}
console.log(registro(juan));
registro(prof1);
var tuplas = [10, "Juan", true];
console.log(tuplas[0]);
console.log("Tamaño: " + tuplas.length);
tuplas.pop();
console.log("Tamaño: " + tuplas.length);
tuplas.push("Saludos");
console.log(tuplas);
tuplas[0] = true;
console.log(tuplas);
