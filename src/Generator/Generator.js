import React from "react";
import { Autocomplete, Button, Select  } from "@skbkontur/react-ui";
import "./Generator.css";
// import {generateKpp} from '../../utils/generator.utils'

export const Generator = () => {

    
const state = () => {
  return ['Физическое лицо', 'Юредическое лицо']
}
    

    
  
  return (
    <div className={"test"}>
     <Select items={state()}/>
      <div>ИНН<Autocomplete className='input' readOnly/></div>
      <div>КПП<Autocomplete className='input' readOnly/></div>
      <Button use={"primary"}>Test</Button>
    </div>
  );
};
