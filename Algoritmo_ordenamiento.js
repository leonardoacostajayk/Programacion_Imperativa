// Buble Sort

function bubleSort(array,orden,propiedad) 
{
  if (orden) 
  {
    for (let m = 0; m < array.length; m++) 
    {
    
        for (let i = 0; i < array.length-1; i++)
        {
            if(array[i]> array[i+1])
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
          if(array[i]< array[i+1])
          {

              let aux = array[i];
              array[i] = array[i+1];
              array[i+1] = aux;
          
          }
        }
      }
    }
    return array;
  }

let edadasc=bubleSort(['C', 'A', 'D', 'E', 'H', 'Z', 'J', 'L'],true);
console.log(edadasc);



