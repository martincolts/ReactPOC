import React , { Component } from 'react';
import axios from 'axios';
import { host } from '../hosts';

export default class EditPerson extends Component {
    constructor (props){
        super (props);

        this.state ={
        };   
        self = this;
        this.handleChangeNombre = this.handleChangeNombre.bind(this);
        this.handleChangeApellido = this.handleChangeApellido.bind(this);
        this.updatePerson = this.updatePerson.bind(this);
    }

    handleChangeNombre(event) {
        this.setState({nombre: event.target.value});
    }
    handleChangeApellido(event) {
        this.setState({apellido: event.target.value});
    }

    updatePerson (){
        const person={
            name: this.state.nombre,
            lastname: this.state.apellido,
            id: this.props.id
        };
        const url = host.ip+host.port+"/demo/updatePerson/"+this.props.id;
        axios.put(url,person)
        .then(function(response){
            self.setState({person: response.data})
        })
        .catch(function (response){
            alert ("mal papa");
        });
    }

    render(){
        return (
        <div>
            Nombre <input type="text" value={this.state.nombre} onChange={this.handleChangeNombre}/>
            Apellido<input type="text" value={this.state.apellido} onChange={this.handleChangeApellido}/>
            <button onClick={this.updatePerson} >Create</button>
        </div>
        )
    }
}