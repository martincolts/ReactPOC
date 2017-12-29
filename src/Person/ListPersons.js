import React, { Component } from 'react';
import axios from 'axios';
import { host } from '../hosts';

export default class ListPersons extends Component {
    constructor(props) {
        super(props);
        self = this ;
        this.state = {
            persons: []
        }
        
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
    }

    render(){
        return (
            <li>
                {this.props.person.name} {this.props.person.lastname}
            </li>
        );
    }
}