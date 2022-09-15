//Ejercicio 1: 

function paresDist(num1,num2) 
 {
   if ((num1 % 2 ===0 && num1 !==0 )&& (num2 % 2===0 && num2 !==0)) 
    {
        return num1 / num2;
     }
    else if (num1 %2 !==0 && num2 %2 !==0) 
     {
        return num1+num2;
    }
   else{
       return -1;
    }
 }
let ejercicio1= paresDist(15,3);
console.log(ejercicio1);

// Ejercicio 2
function boolInt(booleano,num) 
{
    if (booleano && num % 5 ===0) 
    {
        return num*2;
    }
    else if (booleano && num %5 !==0 )
     {
        return num/2;
     }
      else if (booleano===false) 
     {
         return num;
      }
   

 }
let ejercicio2 = boolInt(false,12);
console.log(ejercicio2);

// Ejercicio3
let articulos = [
    {
        id: 4 ,
        precio : 3321,
        tipo : "Deportivo",
        nombre: "Zapatillas"
    },
    {
        id: 22 ,
        precio: 4482,
        tipo : "Moda",
        nombre: "Zapatillas"
    },
    {
        id: 1 ,
        precio: 3600,
        tipo : "Moda",
        nombre: "Zapatos"
    },
    {
        id: 44 ,
        precio: 8889,
        tipo : "Moda",
        nombre: "Remera"
    },
]
function filtroArticulos(array,tipo,precio)
 {
    let nArrayart =[];
    for (let i = 0; i < array.length; i++) 
    {
        
        if (array[i].tipo == tipo && array[i].precio < precio) 
        {
            nArrayart.push(array[i]);
        }
    }
    return nArrayart;
 }
let ejercicio3=filtroArticulos(articulos,"Moda",5000);
console.log(ejercicio3);