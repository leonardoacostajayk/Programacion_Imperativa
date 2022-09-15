let mismascotas=[];
// creo objeto
let mascotas1 = 
{
    nombre: "Firu",
    raza:"pincher",
    edad:2,
    sonido:"Guaf",
    // metodo
    ladrar: function() 
    {
        return this.sonido + " " + this.sonido;
    }
}

let mascotas2 = 
{
    nombre: "Michi",
    raza:"gatito",
    edad:8,
    sonido:"Miau",
    // metodo
    mauyar: function() 
    {
        return this.sonido + " " + this.sonido;
    }
}

let mascotas3 = 
{
    nombre: "Loro",
    raza:"Loro Verde",
    edad:12,
    sonido:"pepepep",
    // metodo
    talarear: function() 
    {
        return this.sonido + " " + this.sonido;
    }
}

 mismascotas.push(mascotas1,mascotas2,mascotas3);

console.log(mismascotas);

function aumentarEdad(arreglo) {
    for (let i = 0; i < arreglo.length; i++) {
        
        arreglo[i].edad++;
    }
    return arreglo;
}
// console.log(aumentarEdad(mismascotas));

function aumentarEdad2(arreglo) {
    for (let i= 0; i < arreglo.length; i++) {
        if (arreglo[i].edad < 6) 
        {
            arreglo[i].edad++;
            
        }
        else if (arreglo[i].edad >=6 && arreglo[i]. edad <=10) {
            arreglo[i]+=2;
        } 
        else 
        {
           arreglo[i].edad =arreglo[i].edad + (arreglo[i].edad /2);
        }
    }
    return arreglo;
}
// console.log(aumentarEdad2(mismascotas));

function generarId(arreglo) {
    for (let i = 0; i < arreglo.length; i++) {
        arreglo[i].identificador =i+1;
        
    }
    return arreglo;
}
let gen_Id= generarId(mismascotas);
// console.log(gen_Id);

function deleteRaza(array) 
{
    for (let i = 0; i < array.length; i++) {
        delete array[i].raza;
        
    }
    return array;
}
let par_del = deleteRaza(mismascotas);
// console.log(par_del);