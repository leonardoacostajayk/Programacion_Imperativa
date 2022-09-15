// Funcion para crear una matrix con numeros enteros aleatorios.
// Matriz de N*M

// function matrix_reload(fila,col) 
// {
//   let matrix=[];
//   for (let i = 0; i <= fila; i++)
//    {
//       matrix[i]=[]; 
//    }
//    for (let i = 0; i < matrix.length; i++) 
//    {
//     for (let j = 0; j <=col; j++) 
//     {
//       matrix[i][j]=Math.floor(Math.random()*101);
      
//     }
     
//    }
//   return matrix;
// }
// function sumaMatrix(matriz) 
// {
//   let sumaMatrix=0;

//   for (let i = 0; i < matriz.length; i++)
//    {
//       for (let j = 0; j< matriz[i].length; j++) 
//       {
//          sumaMatrix+=matriz[i][j];
  
//       }

//    }
//    return sumaMatrix;
// }

// let matrizRandom = matrix_reload(2,2);
// console.table(matrizRandom);
// let sum_Matriz=sumaMatrix(matrizRandom);
// console.log(`Sumatoria Elementos Matriz: ${sum_Matriz}`);

function matrix100() 
{
  let matrix=[];
  let cont=0, k=0;
  for (let i = 0; i < 10; i++) 
   {
    matrix[i]=[];
   
    for (let j = 0; j <10; j++) 
     {
       k++;
       matrix[i][j]=cont+k;
      
    }
     cont+=10;
     k=0;
   }
  return matrix;
}
 let imp_Matrix = matrix100();
console.table(imp_Matrix);

function sum_Red_Green(matrizP) 
{
  
  let sumGreen=0,sumRed=0,coldec=9;
  
  for (let fila = 0; fila < matrizP.length; fila++)
   {
   
    sumRed+=matrizP[fila][fila];
    sumGreen+=matrizP[fila][coldec]
    coldec--;
   }
  return `Suma Diagonal Roja: ${sumRed} -- Suma Diagonal Verde: ${sumGreen}`;
}
let sumaVerde=sum_Red_Green(matrix100());
console.log(sumaVerde);

