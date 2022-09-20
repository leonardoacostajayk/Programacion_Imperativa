// Ejercicio 1
// Dado el siguiente arreglo de objetos: 
// Realizar una función que reciba por parámetro dicho arreglo y
// retorne un nuevo array con los objetos cuyo año de creación sea mayor a 1800.
let cuadros = [
    {
        nombre : "Mona Lisa",
        creador : "Leonardo Da Vinci",
        creacion : 1503
    },
    {
        nombre : "La ultima cena",
        creador : "Leonardo Da Vinci",
        creacion : 1495
    },
    {
        nombre : "La noche estrellada",
        creador : "Vincent van Gogh",
        creacion : 1889
    },
    {
        nombre : "El grito",
        creador : "Edvard Munch",
        creacion : 1893
    },
    {
        nombre : "Trigal con cuervos",
        creador : "Vincent van Gogh",
        creacion : 1890
    },
    {
        nombre : "Maria Magdalena",
        creador : "Leonardo Da Vinci",
        creacion : 1495
    }
]
function creacionMayor1800(array) 
    {
     let narray1800=[];
     for (let i = 0; i < array.length; i++) 
     {
         if (array[i].creacion > 1800) 
         {
             narray1800.push(array[i]);
         }
        
     }
     return narray1800;
 }
console.log(creacionMayor1800(cuadros));

// ------------------------------------------------------------------------------------------
// Ejercicio 2
// Realizar una función que reciba por parámetro al arreglo del ejercicio 1 y
// mediante el algoritmo Bubble Sort ordene a cada objeto de forma
// alfabética (de la A a la Z) según el nombre de cada cuadro. 

function bubbleSortCuadros(array) 
{
    for(let i=0 ; i<array.length ; i++){
 
        for(let j=0 ; j<array.length - 1 ; j++){
      
             if(array[j].nombre > array[j+1].nombre){
      
                 let aux = array[j];
                 array[j] = array[j+1];
                 array[j+1] = aux;
             }
         }
       }
      return array;
}
console.log(bubbleSortCuadros(cuadros));

// ---------------------------------------------------------------------------------------------------

// Ejercicio 3
// Dada la siguiente matriz: 
// let matriz = [
//     [1,2,3,4,5],
//     [6,7,8,9,10],
//     [11,12,13,14,15],
//     [16,17,18,19,20],
//     [21,22,23,24,25]
// ]
// Realizar una función que retorne la suma entre todos los elementos de la fila 0.
// Realizar una función que retorne la multiplicación de todos los elementos que sean múltiplos de 3.

let matriz = [
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15],
    [16,17,18,19,20],
    [21,22,23,24,25]
]

function sumaFila0(matrix) 
{
    let suma=0;
    for(let col = 0 ; col < matrix[0].length ; col++)
    {

        suma+=matrix[0][col]
    }
    return suma;
}
let matrizSuma0 = sumaFila0(matriz);
console.log(`Suma Elementos fila 0 : ${matrizSuma0}`);
console.table(matriz);

// Realizar una función que retorne la multiplicación de todos los elementos que sean múltiplos de 3.
function multiplosMatriz3(matrix) 
{
    let multMod3=1;

    for(let fila = 0 ; fila < matrix.length ; fila++){

        for(let columna = 0 ; columna < matrix[fila].length ; columna++){
            
            if(matrix[fila][columna] % 3 === 0){
                
                multMod3*=matrix[fila][columna];

            }
        }
    }
    return multMod3;
}
let multModulo=multiplosMatriz3(matriz);
console.log(`Resultado Multiplicacion Matriz multiplos de 3: ${multModulo}`);