let matriz = [
    [1,2,5,6] ,
    [3,4,12] ,
    [4,5,8,15]
]

console.table(matriz);

//console.log(matriz[1][0]);

//delete matriz[1][0];

//matriz[1][0] = 16;

//console.table(matriz);

//console.log(matriz[1][0]);

/*
for(let i=0 ; i<matriz.length; i++){ // filas

    for(let j=0 ; j<matriz[i].length ; j++){  // columnas

        console.log(matriz[i][j]);
    }
}
*/
/*
for(let i=0 ; i<matriz.length ; i++){
    console.log(matriz[i][2]);
}
*/
// Cuando me muevo entre filas: matriz.length

// Cuando me muevo entre columnas: matriz[i].length

//console.log(matriz[1][0] + " " + matriz[2][3]);


function mostrarLosPares(matrix){

    for(let fila=0 ; fila<matrix.length ; fila++){

        for(let columna=0 ; columna<matrix[fila].length ; columna++){

            if(matrix[fila][columna] % 2 === 0){
                console.table(matrix[fila][columna]);
            }
        }
    }
}

mostrarLosPares(matriz);
