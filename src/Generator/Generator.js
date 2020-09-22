import React from "react";
import { Button  } from "@skbkontur/react-ui";
import "./Generator.css";

export const Generator = () => {

    function generateInn(type){

        function randomNumber(size) {
          let i = Math.random().toString().slice(2, size);
          return +i;
        } 

      if (type === 'ul') {
         const ul =  randomNumber(12)
         console.log(ul);
      } else {
        const fl =  randomNumber(14)
         console.log(fl);

      }
    }

    function generateKpp() {
        const i = Math.random().toString().slice(2, 11);
       
    }

    

    
  
  return (
    <div className={"test"}>
      <Button use={"primary"}>Test</Button>
    </div>
  );
};
