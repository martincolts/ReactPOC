import React, { Component } from 'react';
import axios from 'axios';
import { host } from '../hosts';
import EditPerson from './EditPerson.js';

export default class ListPersons extends Component {
    constructor(props) {
        super(props);

        self = this ;

        this.state = {
            persons: []
        }
        this.getAllPersonsList = this.getAllPersonsList.bind(this);
    }

    getAllPersonsList () {
        axios.get(host.ip+host.port+"/demo/getAllPersons").then(function (response){
            self.setState({persons : response.data});
        }).catch(function (response){
            alert("anduvo mal");
        })
    };

    render() {
        this.getAllPersonsList();
        return (
            <ListPersonsDom person={this.state.persons}/>
        )
    }

};

export class ListPersonsDom extends Component{
    constructor (props){
        super(props);

    }
    
    render(){
        return (
            <div>
                {this.props.person.map(person => 
                    <ul> <PersonRow person={person} /></ul>
                )}
            </div>
        );
    }
}

export class PersonRow extends Component {
    constructor(props){
        super(props);

        this.state = {
            edit:false
        }

        this.enableEdit = this.enableEdit.bind(this);
    }

    enableEdit(){
        this.setState({edit: !this.state.edit})
    }

    render(){
        if  (this.state.edit){
            return (
                <li>
                    {this.props.person.name} {this.props.person.lastname} <button>Edit</button>
                    <EditPerson person={this.props.person} id={this.props.person.id}/>
                </li>
            );
        } else {
            return (
                (
                    <li>
                        {this.props.person.name} {this.props.person.lastname} <button onClick={this.enableEdit}>Edit</button>
                    </li>
                )
            )
        }
    }

    
}
