let curso ={
    cantidadDeAlumnos :32,
    docentes:["Nacho","Javier"],
    horario: "9-11",
    notificaciones: function(){
        return "El horario de la cursada es de: " + this.horario
    }

}
console.log(curso.notificaciones());