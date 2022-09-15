const prompt = require("prompt-sync")({ sigint: true });


//Sumar todas las notas y dividirlas entre la cantidad de notas a promediar, PROMEDIO=(NOTA1+NOTA2+NOTA3)/3

let promedios = (num1,num2,num3) => (num1+num2+num3)/3;

//console.log(promedios(8,10,9));


//Algoritmo para convertir una cantidad de pesos a dólares.

let pesoAdolar = function(cantDePesos, precioDolar){
    return cantDePesos/precioDolar;
}

//console.log(pesoAdolar(100000, 300));


/*Hacer un programa que calcule el salario de un empleado, si se descuenta el 20% de su salario actual.
*/

let sueldoNuevo = sueldoActual => sueldoActual*0.8;

//console.log(sueldoNuevo(250000));


/*Hacer un programa para calcular el promedio de 3 notas; si el promedio es mayor 
que 7 mostrar aprobado, de lo contrario, mostrar desaprobado.*/

/* Modularizar - dividir el codigo en pequeños bloques que realicen una actividad y 
puedans ser reutilizados */

let situacionAlumno = (nota1,nota2,nota3) => {

    let promedio = promedios(nota1,nota2,nota3);

    if(promedio >= 7){
        return "Aprobaste :D"
    }
    else{
        return "Desaprobaste :( "
    }

}
/*
let notaFinal = situacionAlumno(4,8,7);
console.log(notaFinal);*/

//situacionAlumno(4,5,6);

/*Elaborar un programa que simule una clave de acceso. Si el usuario es: "ADMIN" y 
la clave "123456" mostrar el mensaje "ACCESO PERMITIDO". Caso contrario, mostrar el 
mensaje "ACCESO DENEGADO". */


function acceso (usuario, clave){

    if(usuario === "ADMIN" && clave == 123456){
        return "ACCESO PERMITIDO"
    }       
    else{
        return "ACCESO DENEGADO XD "
    }
}
/*
let accesos = acceso("admin", 123456);
console.log(accesos);
*/

function unValor(valor){
    for(let i=valor+1; i <= valor+10;i++){
        console.log(i);
    }
}

unValor(4)
