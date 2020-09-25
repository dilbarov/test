/**
 * Принимает type который может быть ul или fl
 * @param type 
 */

const validInn = (inn) => {

  const arrInn = inn.split('');
 
  
          if (arrInn[0] === 0 && arrInn[1] === 0) {
            return false
          }   else if((arrInn.length === 10) && ((arrInn[9] == ((2 * arrInn[0] + 4 * arrInn[1]
                    + 10 * arrInn[2] + 3 * arrInn[3] + 5 * arrInn[4] 
                    + 9 * arrInn[5] + 4 * arrInn[6] + 6 * arrInn[7] 
                    + 8 * arrInn[8]) % 11) % 10))) {

                    return true;

          }   else if((arrInn.length === 12) && ((arrInn[10] == ((7 * arrInn[0] + 2 * arrInn[1]
                + 4 * arrInn[2] + 10 * arrInn[3]
                  + 3 * arrInn[4] + 5 * arrInn[5] 
                  + 9 * arrInn[6] + 4 * arrInn[7]
                + 6 * arrInn[8] + 8 * arrInn[9]) % 11) % 10) && (arrInn[11] ==+ ((3 * arrInn[ 0] + 7 * arrInn[1] 
                  + 2 * arrInn[2] + 4 * arrInn[3] + 10 * arrInn[4] 
                  + 3 * arrInn[5] + 5 * arrInn[6] + 9 * arrInn[7] 
                  + 4 * arrInn[8] + 6 * arrInn[9] + 8 * arrInn[10]) % 11) % 10))){
                    return true;
          }
          else {
            return false;
          }

          



}

const randomNumber = (size) => {
    let i = Math.random().toString().slice(2, size);
    let valid = validInn(i);
    

    
    
    while (valid === false) {
       i = Math.random().toString().slice(2, size);
       valid = validInn(i);
      
          if ( valid === true) {
            break;
          }

    }
    
    console.log([i,valid]);
    return i;
  } 

 

export const generateInn = (type) => {

    if (type === 'ul') {
        const ul =  randomNumber(12)
    
        return ul;
  
        
     } else  if (type === 'fl' ){
       const fl =  randomNumber(14)
          
        return fl;
   
     }
};

export const generateKpp = ()=> {
    const i = Math.random().toString().slice(2, 11);
    return i;
};


