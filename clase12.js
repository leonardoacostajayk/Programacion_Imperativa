

/*4 - Funcion que reciba un array de edades y retorne true si encuentra algun elemento 
repetido o false caso contrario */
/*
let edades = [15,95,42,36,78,15];

function repetido(array){

    for(let i=0 ; i<array.length ;  i++){

        if(array[i] === ){
            return true;
        }
    }
}

repetido(edades);
*/


/*Crear el objeto “alumno”, el cual va a consistir de las siguientes propiedades básicas:
● Nombre
● Número de legajo
● Lista de notas
Nos gustaría calcular el promedio del alumno y si el mismo está aprobado, basado en una
nota de aprobación que le va a ser dada. Para este ejercicio, vamos a dejar que pienses
todos los métodos y propiedades que puedan hacer falta para que el programa funcione
correctamente de la manera solicitada.
*/

let alumno = {
        nombre : "Mateo",
        legajo : 452136,
        listaDeNotas : [10,9,8],   // 3
                    //  0  1  2
        promedio : function(){
            let suma = 0;
            for(let i=0 ; i<this.listaDeNotas.length ; i++){
                //suma = suma + this.listaDeNotas[i];
                suma += this.listaDeNotas[i];
            }
            let promedioFinal = suma/this.listaDeNotas.length; //length arranca en 1, devuelve total de numeros dentro del array
            return promedioFinal;
        },
        situacionAlumno : function(nroDeAprobacion){

            let promedioAlumno = this.promedio();

            if(promedioAlumno >= nroDeAprobacion){
                return "Aprobaste :D"
            }
            else{
                return "A recuuuuu"
            }

        }
}






console.log(alumno.situacionAlumno(7));

