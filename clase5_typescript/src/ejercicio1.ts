var mensaje:string = "Hola a todos desde casa";
console.log(mensaje);
var mensaje:string = "Hola2";

let mensaje2: string = "Mensaje2";


const pi: number = 3.1416;

var numero1: number = 2; 2^64
var numero2: number =12.3;
var numero3 = numero1 +numero2;

var boleanas: boolean = true;
var variablesVacias : void; 
var varNulo: null; 
var indefinido: undefined;

var numero4:any = 3;
console.log(typeof(numero4));
numero4 = "juan";
console.log(typeof(numero4));


function suma(num1:number, num2:number){
    return num1 +num2;
}

let resultado1 = suma(numero1, numero2);
console.log("Resultado1: "+resultado1);

var str1 = "2";
var numero5:number = <number><any> str1;
console.log(typeof(numero5));

var numero6 = +str1;
console.log(typeof numero6);

var arreglo:string[] = ["1","Juan", "pedro"];
console.log("Arreglo"+arreglo[1]);

for(var i = 0; i<arreglo.length;i++){
    console.log("For: "+ arreglo[i]);
}

var indice: any;
for(indice in arreglo){
    console.log(arreglo[indice]);
}

let frutas: Array<string> =["manzana","pera","sandia"];
class SerHumano{

}

class Estudiante extends SerHumano{
    nombreCompleto: string;

    constructor(public aMaterno, public aPaterno, public nombre){
        super();
        this.nombre = aMaterno+ " "+ aPaterno+ " " +nombre;
    }

}
var juan : Estudiante = new Estudiante("Velez", "Ballesteros", "Juan");
console.log("nombre: "+ juan.nombre );
 
class Profesor extends SerHumano{
    
    constructor(public clase: string,public aMaterno, public aPaterno){
        super();
    }
}
var prof1= new Profesor("DesarrolloWeb","Velez","Ballesteros");

interface Persona{
    aMaterno : string;
    aPaterno : string;
}

function registro(persona: Persona){
    return "se registro: " +persona.aMaterno +" "+ persona.aPaterno;
}

console.log(registro(juan));
registro(prof1);

var tuplas = [10, "Juan", true];
console.log(tuplas[0]);
console.log("Tamaño: "+ tuplas.length)
tuplas.pop();
console.log("Tamaño: "+ tuplas.length);
tuplas.push("Saludos");
console.log(tuplas);
tuplas[0]=true;
console.log(tuplas);