import React, { Component } from 'react';
import axios from 'axios';
import { host } from '../hosts.js';

export default class CreatePerson extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            nombre: '',
            apellido: ''
            }
        
       this.handleChangeNombre = this.handleChangeNombre.bind(this);
       this.handleChangeApellido = this.handleChangeApellido.bind(this);
       this.createPerson = this.createPerson.bind(this);
    }

    handleChangeNombre(event) {
        this.setState({nombre: event.target.value});
      }
      handleChangeApellido(event) {
        this.setState({apellido: event.target.value});
      }

    createPerson(event) {   
        const person = {
            name : this.state.nombre ,
            lastname : this.state.apellido ,
            id : '0'
        }
        axios.post(host.ip+host.port+"/demo/postPerson",person)
        .then((response)=>{
            (console.log(response));
            this.setState = (
                {
                    nombre: "",
                    apellido: ""
                    }
            )
        })
        .catch((response)=>(console.log(response)));
    }

    render() {
        return (
            <div>
                Nombre <input type="text" value={this.state.nombre} onChange={this.handleChangeNombre}/>
                Apellido<input type="text" value={this.state.apellido} onChange={this.handleChangeApellido}/>
                <button onClick={this.createPerson} >Create</button>
            </div>
        )
    }
}