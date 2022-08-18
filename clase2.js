const prompt = require("prompt-sync")({ sigint: true });

/*
// Crear o definir una funcion
function saludar(nombrePersona = "Raul"){
    console.log("Hola tanto tiempo " + nombrePersona);
}


// Llamar o invocar a la funcion
saludar("Jesu");
saludar();
saludar("Emi");

let nombreUsuario = prompt("Ingrese su nombre: ");
saludar(nombreUsuario);

*/

function sumar(num1, num2){
    let resultado = num1 + num2;
    //console.log(resultado);
    return resultado;
}

let rdoSuma = sumar(5,1);
//console.log(rdoSuma);

/*
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
*/ 


//Funciones declaradas
function suma(num1,num2){
    return num1+num2;
}

suma(8,2);

//Funciones expresadas
let sumaExpresada = function (num1, num2){
    return  num1 / num2;
}

sumaExpresada(4,2);

//Arrow function
let sumaArrow = (num1, num2) => num1+num2;

sumaArrow(5,2);














