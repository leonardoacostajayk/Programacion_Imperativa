// function paroimpar(numero)
//  {
//     if (numero % 2 ===0 && numero %5===0)
//      {
//         return true;
//     }
//     else if(numero % 2 !==0 || numero %3 ===0)
//     {
//         return 'Cumple con los requisitos';
//     }
//     else
//     {
//         return false;
//     }
// }
// let resultado = paroimpar(100);
// console.log(resultado);

// function ejAnterior2(booleano,numero) {
//     if (booleano===true && numero % 10 ===0) 
//     {
//         return numero*3;
//     }
//     else if (booleano===true && numero % 3 !==0) 
//     {
//         return numero*2;
//     }
//     else if(booleano===false)
//     {
//         return numero;
//     }
//     else
//     {
//         return 'Parametro incorrecto';
//     }
// }
// let resultado2 = ejAnterior2(false,50);
// console.log(resultado2);

let cervezas=[];

let objeto1 ={
    nombre:'Quilmes',
    precio:200,
    IBU: 4
}

let objeto2 ={
    nombre:'IPA',
    precio:600,
    IBU: 4
}

let objeto3 ={
    nombre:'PATAGONIA',
    precio:300,
    IBU: 14
}

cervezas.push(objeto1,objeto2,objeto3);
function precioMaximo(array,numero)
 {
    let nuevoArray =[];
    for (let i = 0; i < array.length; i++) {
        
        if (array[i].precio > numero)
         {
            nuevoArray.push(array[i]);
        }
    }
    return nuevoArray;
}

let res=precioMaximo(cervezas,500);
console.log(res);





