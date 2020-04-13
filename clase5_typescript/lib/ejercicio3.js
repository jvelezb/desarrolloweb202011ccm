//setTimeout(()=>console.log("Primero"), 1000);
//setTimeout(()=>console.log("segundo"),500);
//console.log("tercero");
var ModuloAsincrono;
(function (ModuloAsincrono) {
    function callback() {
        console.log("Primer callback");
        setTimeout(callback2, 500);
    }
    function callback2() {
        console.log("segundo callback");
    }
    //setTimeout(callback,1000);
    console.log("tercera");
    async function funcionVacia() {
        async function funcionAsyncrona() {
            let promesa = new Promise((resolve, reject) => {
                setTimeout(() => {
                    try {
                        console.log("Primera - promesa");
                        //resolve("Exito"); 
                        reject("fallo");
                    }
                    catch (error) {
                        reject("falla");
                    }
                }, 1000);
            }).then(res => {
                console.log("primer then", res);
                return "Primer then";
            }).then(res => {
                console.log("Segundo then", res);
                return "Segundo then";
            }).catch(error => {
                console.log("error");
                return "error";
            });
            let resultadoDeLaPromesa = await promesa;
            console.log("resultado de la promesa: " + resultadoDeLaPromesa);
            return resultadoDeLaPromesa;
        }
        console.log("Resultado final de la funcion: " + await funcionAsyncrona());
    }
    //funcionVacia();
})(ModuloAsincrono || (ModuloAsincrono = {}));
function ejecucion() {
    var entrada = document.getElementById("entrada1").value;
    var numeroEntrada = +(entrada);
    //alert("entre a la ejecucion: "+entrada);
    setTimeout(() => {
        document.getElementById("titulo1").innerText = "Bienvenidos todos: " + entrada;
        document.getElementById("titulo1").style.color = "blue";
        document.getElementById("titulo1").className = "claseNueva";
    }, numeroEntrada);
}
