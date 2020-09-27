import React, {Component} from "react";
import {Button, Select} from "@skbkontur/react-ui";
import "./Generator.css";
import {generateInn, generateKpp} from '../utils/generator.utils';
import BlockImput from '../component/inputs';


export class Generator extends Component {
    constructor() {
        super()
        this.itemSelect = ['Юридическое лицо', 'Физическое лицо'];
        this.state = {
            value: 'ul',
            inn: '',
            kpp: ''
        }
        this.onValue = this.onValue.bind(this);
        this.onGenerate = this.onGenerate.bind(this);
    }

    onValue(e) {
        let user = ''
        if (e === 'Юридическое лицо') {
            user = 'ul'
        } else {
            user = 'fl'
        }


        this.setState({
            value: user
        })

    }

    onGenerate() {
        let inn = generateInn(this.state.value);
        let kpp = '';
        if (this.state.value === 'ul') {
            kpp = generateKpp();
        }
        this.setState({inn, kpp})
    }


    render() {

        return (
            <div className={"test"}>
                <form>
                    <Select items={this.itemSelect} onValueChange={this.onValue}/>

                    <BlockImput user={this.state.value} inn={this.state.inn} kpp={this.state.kpp}/>
                    <Button use={"primary"} onClick={this.onGenerate}>Сгенерировать</Button>
                </form>
            </div>
        );


    }


};
