let horariosPartida = [12, 14, 18, 21];
let  horariosAtrasados=horariosPartida.map(function(num){
    return num=num-1;
});
console.log(horariosAtrasados);

let estudiantes = [
    {nombre: 'John', promedio: 8.5, aprobado: true},
    {nombre: 'Jane', promedio: 7, aprobado: true},
    {nombre: 'June', promedio: 3, aprobado: false},
]
let aprobados=estudiantes.filter(function(done)
});
let desaprobados=estudiantes.filter(function(nodone)
{
 return !estudiantes.aprobado;
});
console.log(aprobados);