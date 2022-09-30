let numeros = [33, 27, 34, 30, 34, 25, 0, 1];


//Recorrer él array utilizando él método .forEach() imprimir cada uno de los elementos.
/*
numeros.forEach(function(num){
    console.log(num);
});
*/

//Utilizar un método de array para recorrer todo sus elementos e incrementar su valor en 1.

let nuevoArray = numeros.map(function(num){
    return num+1;
});

//console.log(nuevoArray);


//Utilizar un método para filtrar los números pares e imprimir él nuevo array.

let arrayFiltrados = numeros.filter(function(num){
    if(num % 2 === 0){
        return num;
    }
})

//console.log(arrayFiltrados)


//Utilizar un método para obtener la suma total de los números.

let suma = numeros.reduce(function(acum, num){
    return acum + num;
});

//console.log(suma);





//Obtener él promedio de los números, utilizando métodos de arrays.


let promedio = suma/numeros.length;

//console.log(promedio);
