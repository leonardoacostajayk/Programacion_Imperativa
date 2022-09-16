// Ejercicio 1
// En un concurso de fotografía, donde los usuarios publican una fotografía y obtienen
// likes, se registra la cantidad de likes obtenidos por cada usuario en un array. Ordenar
// los valores para poder indicar cuál fue la mayor cantidad de likes obtenidos, cuánto
// obtuvo el segundo, cuánto el tercero y cuánto el que menos likes obtuvo —suponer
// que participaron 15 usuarios y suponer para cada uno, una cantidad de likes—.

// Funcion que ordena un array de objetos  de forma Ascendente
let arrayuserfoto=[
    {
        username: 'leonardo',
        clikes:1000
    },
    {
        username: 'mapaz',
        clikes:10567
    },
    {
        username: 'mati',
        clikes:1976
    },
    {
        username: 'yenvi',
        clikes:50890
    },
    {
        username: 'doroteo',
        clikes:20
    },
    {
        username: 'file',
        clikes:2000
    },
    {
        username: 'gato1',
        clikes:56
    },
    {
        username: 'gato2',
        clikes:566
    }

]


// function ordenarArrayAsc(array,propiedad){

//     for(let i=0 ; i<array.length ; i++){

//         for(let j=0 ; j<array.length - 1 ; j++){
    
//             if(array[j][propiedad] > array[j+1][propiedad]){
    
//                 let aux = array[j];
//                 array[j] = array[j+1];
//                 array[j+1] = aux;
//             }
//         }
//     }
//     return array;
// }

// Funcion que ordena un array de objetos  de forma Descendente
function ordenararrayDesc(array,propiedad){
    for(let i=0 ; i<array.length ; i++){

        for(let j=0 ; j<array.length - 1 ; j++){
    
            if(array[j][propiedad] < array[j+1][propiedad]){
    
                let aux = array[j];
                array[j] = array[j+1];
                array[j+1] = aux;
            }
        }
    }
    return array;
}
function likesFotografia(array,propiedad) 
{
    let arregloOrdenadoDesc= ordenararrayDesc(array,'clikes');

   return arregloOrdenadoDesc[0];
}
console.log(likesFotografia(arrayuserfoto,'clikes'));