import React, {Component} from 'react'
import classes from './Person.css';

class Person extends Component{
    render(){
        console.log('[Person.js] rendring...');
        return (
            <div className={classes.Person}>
                <p onClick={this.props.click}>I am a {this.props.name} year old{this.props.age}!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </div>
        )
    }


};
export default Person;