/**
 * Принимает type который может быть ul или fl
 * @param type
 */

function randomNumber(size) {
    let i = Math.random().toString().slice(2, size);
    return i;
  } 

export const generateInn = (type) => {

    if (type === 'ul') {
        const ul =  randomNumber(12)
        console.log(ul);
     } else {
       const fl =  randomNumber(14)
        console.log(fl);
   
     }
};

export const generateKpp = ()=> {
    const i = Math.random().toString().slice(2, 11);
};


