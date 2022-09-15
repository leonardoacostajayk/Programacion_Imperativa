let numeros = [
  {
    nombre : "Pepe",
    edad: 65
  },
  {
    nombre : "Ana",
    edad: 70
  },
  {
    nombre : "Anabela",
    edad: 15
  }
];


for(let m=0 ; m<numeros.length; m++){

  for(let i=0 ; i<numeros.length - 1 ; i++){

    if(numeros[i].nombre > numeros[i+1].nombre){
  
      let aux = numeros[i];
      numeros[i] = numeros[i+1];
      numeros[i+1] = aux;
  
    }
  }
}

console.log(numeros);




