// //console.log("Hola mundo!");

// function mayorDe2(num1, num2) {
//     if (num1 > num2) {
//       return num1;
//     } else {
//       return num2;
//     }
//   }
  
//   //console.log(mayorDe2(4, 60));
  
//   function mayorDe3(a, b, c) {
//     return mayorDe2(mayorDe2(a, b), c);
//     //                    56
//   }
  
//   //console.log(mayorDe3(41,56,23));
  
//   function mayorDe4(a, b, c, d) {
//     //return mayorDe2(mayorDe3(a,b,c),d)
//     return mayorDe2(mayorDe2(a, b), mayorDe2(c, d));
//   }
  
//   //console.log(mayorDe4(45, 12, 36, 89));
  
//   //console.log(Math.max(45, 12, 36, 85));
  
//   function mayorDe4ConMath(a, b, c, d) {
//     return Math.max(a, b, c, d);
//   }
  
//   //console.log(mayorDe4ConMath(45, 12, 36, 89));
  
//   function mayorEnArray(arreglo) {
//     let mayor = arreglo[0];
  
//     for (let i = 0; i < arreglo.length; i++) {
//       if (arreglo[i] > mayor) {
//         mayor = arreglo[i];
//       }
//     }
//     return mayor;
//   }
  
//   let arregloDePrueba = [14, 45, 69, 85, 23];
  
//   console.log(mayorEnArray(arregloDePrueba));
  
//   function mayorEnArrayConMath(arreglo) {
//     let mayor = arreglo[0];
  
//     for (let i = 0; i < arreglo.length; i++) {
//       mayor = Math.max(arreglo[i], mayor);
//     }
  
//     return mayor;
//   }
  
//   //console.log(mayorEnArrayConMath(arregloDePrueba));
  
//   console.log(...arregloDePrueba);
function multiplo(num,mult3,mult5)
 {
      if ((num % mult3 ===0) && (num % mult5===0) )
      {
        return 'fizzbuzz';
      }
      else if (num % mult3 ===0) 
      {
        return 'fizz';
      }
      else if (num % mult5===0)
       {
        return 'buzz';
      }
    return num;
  
}
function fizzbuzz() 
{
let array=[];
let j=0;
     
    for (let i = 1; i <=100; i++) 
    {
        array[j] =multiplo(i,3,5);
        j++;
    
    }
    
  
    
    return array;
}
let areglo_multiplos = fizzbuzz();
console.log(areglo_multiplos);