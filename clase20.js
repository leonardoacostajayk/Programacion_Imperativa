let personas = [
    {
      nombre: "Dua",
      apellido: "Lipa",
      ocupacion: "cantante",
      estatura: 173,
    },
    {
      nombre: "Ariana",
      apellido: "Grande",
      ocupacion: "cantante",
      estatura: 160,
    },
    {
      nombre: "Taylor",
      apellido: "Swift",
      ocupacion: "cantante",
      estatura: 180,
    }
];

/*
for(let i=0 ; i<personas.length ; i++){

    for(let j=0 ; j<personas.length - 1 ; j++){

        if(personas[j].estatura > personas[j+1].estatura){

            let aux = personas[j];
            personas[j] = personas[j+1];
            personas[j+1] = aux;
        }
    }
}
*/

//console.log(personas);

function ordenarArrayAsc(arreglo){

    for(let i=0 ; i<arreglo.length ; i++){

        for(let j=0 ; j<arreglo.length - 1 ; j++){
    
            if(arreglo[j].estatura > arreglo[j+1].estatura){
    
                let aux = arreglo[j];
                arreglo[j] = arreglo[j+1];
                arreglo[j+1] = aux;
            }
        }
    }
    return arreglo;
}

function ordenarArregloDesc(arreglo){
    for(let i=0 ; i<arreglo.length ; i++){

        for(let j=0 ; j<arreglo.length - 1 ; j++){
    
            if(arreglo[j].estatura < arreglo[j+1].estatura){
    
                let aux = arreglo[j];
                arreglo[j] = arreglo[j+1];
                arreglo[j+1] = aux;
            }
        }
    }
    return arreglo;
}

//console.log(ordenarArray(personas));

/* Crear una funcion que reciba por parametro un arreglo y un string

La funcion debera ordenar los objetos del array según el string lo indique

- Si el string es "ASC" lo ordenaremos de forma ascendente

- Si el string "DESC" lo ordenaremos de forma descendente

- Si recibe algo diferente, indicar un mensaje de error

*/

function ordenar(arreglo, string){

    string = string.toUpperCase();

    if(string === "ASC"){

        let arregloOrdenadoAsc = ordenarArrayAsc(arreglo);
        return arregloOrdenadoAsc;
    }
    else if(string === "DESC"){
        let arregloOrdenadoDesc= ordenarArregloDesc(arreglo);
        return arregloOrdenadoDesc;
    }
    else{
        return "Parametro incorrecto, INUTIL";
    }
}

console.log(ordenar(personas, "aSc"));














