// Cargar Modulo para ingreso datos por teclado
const prompt = require("prompt-sync")({ sigint: true });
// let nsig = valor =>
 
// {
//     for (let i=valor+1; i<=valor+10;i++)
//     {
//         console.log(i);
//     };
    
// };
// nsig(234);

// let pesoAdolar = function(cantPesos,precioDolar){
//     return cantPesos/precioDolar;
// }
// console.log(pesoAdolar(100000, 300));
// let promedios = (num1,num2,num3) =>(num1+num2+num3/3);

//Reutilizacion de codigo o funciones recursivas
// let situacionAlumno = (nota1,nota2,nota3) => 
// {

//     let promedio = promedios (nota1,nota2,nota3);
//     if (promedio >= 7) 
//     {
//         return "Aprobado";
//     }
//     else
//     {
//         return "Desaprobado";
//     }
// }
// let notaFinal = situacionAlumno(4,8,7);
// console.log(notaFinal);
// let acceso = (usuario,clave) =>
// {
//     if (usuario ==="ADMIN" && clave==123456) 
//     {
//         return "ACCESO PERMITIDO";
//     }
//     else{
//         return "ACCESO DENEGADO";
//     }
// }
// let accesos = acceso("ADMIN",123456);
// console.log(accesos);

let impfrase = frase => console.log(frase);
// 4) Escribí un programa que le pida al usuario su año de
// nacimiento e imprima su edad actual en la consola con la frase
// "Tienes X años" (siendo X la cantidad de años).
// Por ejemplo, asumiendo que el año actual es 2019 y el usuario 
// ingresa 1999, el programa debe imprimir en la consola: “Tienes
// 20 años”
let edad = anionac => 
{
    let anioactual = new Date().getFullYear();
    return anioactual - anio;
}
let anio =parseInt(prompt("Año Nacimiento: "));
console.log(edad(anio));