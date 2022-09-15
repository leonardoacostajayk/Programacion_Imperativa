function generarMatriz10x10(){

    let matriz = [];

    for(let i=0 ; i<100 ; i+=10){  // 10

        let fila = [];

        for(let j=1 ; j<=10 ; j++){ // 1

            fila.push(j+i); // 1, 2, 3 ... 10
        }
        matriz.push(fila);
    }
    return matriz;
}

//console.table(generarMatriz10x10());


function sumarDiagonalRoja(matriz){

    let rdoSuma = 0;

    for(let i=0 ; i<matriz.length ; i++){

        for(let j=0 ; j<matriz[i].length ; j++){

            if(i === j){
                rdoSuma += matriz[i][j];
            }
        }
    }
    return rdoSuma;
}

//console.log(sumarDiagonalRoja(generarMatriz10x10()));


function sumarDiagonalVerde(matriz){

    let rdoSuma = 0;

    for(let i=0 ; i<matriz.length ; i++){

        for(let j=0 ; j<matriz[i].length ; j++){

            if(i+j === matriz.length - 1){
                rdoSuma += matriz[i][j];
            }
        }
    }
    return rdoSuma;
}

//console.log(sumarDiagonalVerde(generarMatriz10x10()));


let mes = [
    [41,56,89,63,25,41,58],   //Semana 1
    [41,56,89,63,25,41,70],   // Semana 2
    [41,56,89,63,25,41,58],
    [41,56,89,63,25,41,58]    // Semana 4
]

console.table(mes);


function sumaSemana(matriz, numSemana){

    let suma = 0;

    for(let i=0 ; i<matriz[numSemana - 1].length ; i++){

        suma += matriz[numSemana-1][i];
    }
    return suma;
}

console.log(sumaSemana(mes,2))

