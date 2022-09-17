/*- 

Consignas:

Matrices:
1. Crear una matriz de 3 x 4 
2. Crear una funcion que suma todos los valores de la matriz que sean pares
3. Crear una funcion que cambie todos los valores de la matriz que sean multiplos de 5 por 
un numero 1
4. Crear una funcion que genere un nuevo array donde se guarden todos los numeros impares de 
la matriz
5. Crear una funcion que retorne la multiplicacion de todos los elementos de la fila 1


Bubble Sort:
1. Armá un array llamado estudiantes de 3 objetos, que cada uno de ellos tenga: nombre, edad y notaFinal.
2. Crear una funcion que ordene esos objetos por edad de forma ascendente
3. Crear una funcion que retorne un nuevo array. Este deberá contener solo los objetos cuya notaFinal sean mayores o iguales a 7 
4. Agregar un atributo id a cada objeto que inicie en 1 y sea secuencial

*/


//Crear una matriz de 3 x 4
let matriz = [
    [41,56,32,58],
    [84,20,15,36],
    [74,10,15,23]
];


//Crear una funcion que suma todos los valores de la matriz que sean pares

function sumarPares(matrix){

    let suma = 0;

    for(let fila = 0 ; fila < matrix.length ; fila++){

        for(let columna = 0 ; columna < matrix[fila].length ; columna++){   //OJO LA CONDICION
            
            if(matrix[fila][columna] % 2 === 0){
                suma += matrix[fila][columna];

                //suma = suma + matrix[fila][columna];   Otra opcion
            }
        }
    }
    return suma;
}

//console.log(sumarPares(matriz));


//Crear una funcion que cambie todos los valores de la matriz que sean multiplos de 5 por 
//un numero 1

function multiplosDe5(matrix){


    for(let fila = 0 ; fila < matrix.length ; fila++){

        for(let columna = 0 ; columna < matrix[fila].length ; columna++){
            
            if(matrix[fila][columna] % 5 === 0){
                
                matrix[fila][columna] = 1;

            }
        }
    }
    return matrix;
}

//console.table(multiplosDe5(matriz));


//Crear una funcion que genere un nuevo array donde se guarden todos los numeros impares de 
//la matriz

function retornarImpares(matrix){

    let nuevoArray = [];

    for(let i=0 ; i<matrix.length ; i++){

        for(let j=0 ; j<matrix[i].length ; j++){

            if(matrix[i][j] % 2 !== 0){

                nuevoArray.push(matrix[i][j]);
            }

        }
    }
    return nuevoArray;
}



//console.log(retornarImpares(matriz));

let arregloDeImpares = retornarImpares(matriz);
//console.log(arregloDeImpares);



//Crear una funcion que retorne la multiplicacion de todos los elementos de la fila 1


function multiplicar(matrix, fila){

    let rdoMultiplicacion = 1;

    for(let i=0 ; i<matrix[fila].length ; i++){

        rdoMultiplicacion *= matrix[fila][i];

    }

    return rdoMultiplicacion;
}

//console.log(multiplicar(matriz,1));



//Armá un array llamado estudiantes de 3 objetos, que cada uno de ellos tenga: nombre, edad y notaFinal.

let estudiantes = [
    {
        nombre : "Pepe",
        edad : 65,
        notaFinal : 9
    },
    {
        nombre : "Maria",
        edad : 30,
        notaFinal : 7
    },
    {
        nombre : "Juan",
        edad : 15,
        notaFinal : 4
    }
];

//Crear una funcion que ordene esos objetos por edad de forma ascendente

function ordenarPorEdad(arreglo){

    for(let i=0 ; i<arreglo.length ; i++){

        for(let m=0 ; m<arreglo.length - 1 ; m++){    //ojo la condicion

            if(arreglo[m].edad > arreglo[m+1].edad){

                let aux = arreglo[m];
                arreglo[m] = arreglo[m+1];
                arreglo[m+1] = aux;
            }
        }
    }
    return arreglo;
}

//console.log(ordenarPorEdad(estudiantes));


//3. Crear una funcion que retorne un nuevo array. 
//Este deberá contener solo los objetos cuya notaFinal sean mayores o iguales a 7

function arrayDeAprobados(arreglo){

    let nuevoArray = [];

    for(let i=0 ; i<arreglo.length ; i++){

        if(arreglo[i].notaFinal >=7){

            nuevoArray.push(arreglo[i]);
        }
    }

    return nuevoArray;
}

//console.log(arrayDeAprobados(estudiantes));


let perro = {
    nombre : "firu"
}




console.log(perro);