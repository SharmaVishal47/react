import React, {Component} from 'react'
import withClass from '../../../hoc/withClass';
import classes from './Person.css'

import  Auxiliary from '../../../hoc/Auxiliary'
class Person extends Component{
    render(){
        console.log('[Person.js] rendring...');
        return (
                <Auxiliary>
                   {/* <React.Fragment>*/}
                <p key={"i1"} onClick={this.props.click}>I am a {this.props.name} year old{this.props.age}!</p>
                <p key={"i2"}>{this.props.children}</p>
                <input key={"i3"} type="text" onChange={this.props.changed} value={this.props.name}/>
                   {/* </React.Fragment>*/}
                </Auxiliary>
        );
    }


};
export default withClass(Person, classes.Persons);