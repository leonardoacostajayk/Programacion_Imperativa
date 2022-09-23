let numeros = [2,4,6,8,10,12];

//Realizar una funcion que retorne la ubicacion del numero 4

//Busqueda lineal
function busquedaLineal(arreglo,num){

    for(let i=0 ; i<arreglo.length ; i++){

        if(arreglo[i] === num){
            return i;
        }
    }
    return "No se ha encontrado";
}

//console.log(busquedaLineal(numeros, 4));


// Busqueda binaria
function busquedaBinaria(arreglo, num){

    let inicio = 0; //indice
    
    let final = arreglo.length - 1; //indice

    while(inicio <= final){

        let indiceMitad = Math.floor((inicio+final)/2); //indice

        let elementoMitad = arreglo[indiceMitad].edad;

        if(elementoMitad === num){
            return indiceMitad;
        }

        if(elementoMitad > num){
            final = indiceMitad - 1;
        }
        else{
            inicio = indiceMitad + 1;
        }

    }
}

//console.log(Math.round(2.8));

//console.log(busquedaBinaria(numeros,4));

let personas = [
    {
        nombre : "Pepe",
        edad : 10
    },
    {
        nombre : "Pepe",
        edad : 30
    },
    {
        nombre : "Pepe",
        edad : 65
    }
]

console.log(busquedaBinaria(personas, 65));




