import React, { Component } from 'react';
import { Autocomplete} from "@skbkontur/react-ui";
import './inputs.css';

export default class BlockImput extends Component {
    constructor(props){
        super(props);
    }

  render() {
      let {user,inn,kpp} = this.props;

    if(user === 'fl') {
        return (
            <div className='block-input'>
                <label className='input-label'>ИНН</label>
              <div> <Autocomplete  className='input' readOnly value={inn}/></div>     
                
                
            </div>
        )
    } else {
        return (
            <div className='block-input' >
                <label className='input-label'>ИНН</label>
              <div> <Autocomplete  className='input ' readOnly value={inn}/></div>     
                

                <label className='input-label'>КПП</label>
                <div> <Autocomplete  className='input' readOnly value={kpp}/></div>  
                
            </div>
        )

    }
      
  }

}