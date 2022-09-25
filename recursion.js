// FUNCIONES RECURSIVAS 

// funcion map()
let horariosPartida = [12, 14, 18, 21];
let  horariosAtrasados=horariosPartida.map(horariosPartida=>horariosPartida-1);
console.log(horariosAtrasados);

// Funcion filter()
let estudiantes = [
    {nombre: 'John', promedio: 8.5, aprobado: true},
    {nombre: 'Jane', promedio: 7, aprobado: true},
    {nombre: 'June', promedio: 3, aprobado: false},
]
let aprobados=estudiantes.filter(estudiantes =>estudiantes.aprobado);
 
let desaprobados=estudiantes.filter(estudiantes => !estudiantes.aprobado);
console.log('Alumnos Aprobados:', aprobados);
console.log('Alumnos Desaprobados:', desaprobados);

// Funcion reduce()
let vueltas = [5, 8, 12, 3, 22];
let totalVueltas = vueltas.reduce((suma,numero)=>suma+numero);
console.log(`Total de vueltas : ${totalVueltas}`);

// Funcion forEach()-- Iterar cada item de un array
let listaDeSuperMercado = [
    'Bife de chorizo', 
    'Coca Cola', 
    'Bananas', 
    'Lechuga', 
    'Chimichurri', 
    'Lata de tomates', 
    'Arvejas', 
    'Cereales', 
    'Pechuga de pollo', 
    'Leche'
];
listaDeSuperMercado.forEach(item=>console.log(item));
