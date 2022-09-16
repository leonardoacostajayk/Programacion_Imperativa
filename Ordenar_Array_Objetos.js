function bublesortObj(array,orden,propiedad) 
{
  if (orden) 
  {
    for (let m = 0; m < array.length; m++) 
    {
    
        for (let i = 0; i < array.length-1; i++)
        {
            if(array[i][propiedad]> array[i+1][propiedad])
            {
  
                let aux = array[i];
                array[i] = array[i+1];
                array[i+1] = aux;
            
            }
        }
 
    
    }
    
  } 
  else
  {
    for (let m = 0; m < array.length; m++) 
    {
    
        for (let i = 0; i < array.length-1; i++)
        {
          {

            if(array[i][propiedad]< array[i+1][propiedad])
            {
  
                let aux = array[i];
                array[i] = array[i+1];
                array[i+1] = aux;
            
            }
          
          }
        }
      }
    }
    return array;
  }

let edadasc=bublesortObj(
  [
      {
        titular: "Arlene Barr",
        estaHabilitada: false,
        saldo: 3253.40,
        edadTitular: 33,
        tipoCuenta: "sueldo"
      },
      {
        titular: "Roslyn Torres",
        estaHabilitada: false,
        saldo: 3229.45,
        edadTitular: 27,
        tipoCuenta: "sueldo"
      },
      {
        titular: "Cleo Lopez",
        estaHabilitada: true,
        saldo: 1360.19,
        edadTitular: 34,
        tipoCuenta: "corriente"
      },
      {
        titular: "Daniel Malone",
        estaHabilitada: true,
        saldo: 3627.12,
        edadTitular: 30,
        tipoCuenta: "sueldo"
      },
      {
     titular: "Ethel Leon",
        estaHabilitada: true,
        saldo: 1616.52,
        edadTitular: 34,
        tipoCuenta: "sueldo"
      },
      {
        titular: "Harding Mitchell",
        estaHabilitada: true,
        saldo: 1408.68,
        edadTitular: 25,
        tipoCuenta: "corriente"
      }
    ],false,'edadTitular');
console.log(edadasc);