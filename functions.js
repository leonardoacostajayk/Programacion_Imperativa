// Cargar Modulo para ingreso datos por teclado
const prompt = require("prompt-sync")({ sigint: true });
// Arrow Functions operaciones aritmeticas
let operaciones = (num1, num2) =>
{
    const res = new Array();
    res[0]= num1 + num2;
    res[1]= num1 * num2;
    res[2]= num1 - num2;
    res[3]= num1 / num2;
    return res;
};
// Capturo por pantalla los numeros y comvierto la captura en enteros
let numero1=parseInt(prompt("Ingrese Numero1: "));
let numero2=parseInt(prompt("Ingrese Numero2: "));

// Paso los parametros numero1 y numero2 a la funcion y se lo asigno a una variable
let resultados=operaciones(numero1,numero2);

//Imprimo los resultados
 console.log(` Suma: ${resultados[0]} 
 Multiplicacion: ${resultados[1]}
 Resta: ${resultados[2]}
 Division: ${resultados[3]}`);
