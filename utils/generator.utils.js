/**
 * Принимает type который может быть ul или fl
 * @param type 
 */

const randomNumber = (size) => {
    let i = Math.random().toString().slice(2, size);
    return i;
  } 

  const validInn = (inn) => {
    if (inn[0] === 0 && inn[1] === 0) {
      return false;
    } else {
      return true
    }
    
  }

export const generateInn = (type) => {

    if (type === 'ul') {
        const ul =  randomNumber(12)
        const innValid = validInn(ul);
        
        
        

        return ul;
        
     } else  if (type === 'fl' ){
       const fl =  randomNumber(14)
       const innValid = validInn(fl);
       
       
        return fl;
   
     }
};

export const generateKpp = ()=> {
    const i = Math.random().toString().slice(2, 11);
    return i;
};


