// Ejercicio 1
// En un concurso de fotografía, donde los usuarios publican una fotografía y obtienen
// likes, se registra la cantidad de likes obtenidos por cada usuario en un array. Ordenar
// los valores para poder indicar cuál fue la mayor cantidad de likes obtenidos, cuánto
// obtuvo el segundo, cuánto el tercero y cuánto el que menos likes obtuvo —suponer
// que participaron 15 usuarios y suponer para cada uno, una cantidad de likes—.

// Funcion que ordena un array de objetos  de forma Ascendente
function ordenarArrayAsc(array,propiedad){

    for(let i=0 ; i<array.length ; i++){

        for(let j=0 ; j<array.length - 1 ; j++){
    
            if(array[j][propiedad] > array[j+1][propiedad]){
    
                let aux = array[j];
                array[j] = array[j+1];
                array[j+1] = aux;
            }
        }
    }
    return array;
}

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
function likesFotografia(array,ordenDesc,propiedad) 
{
}