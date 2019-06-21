import React from 'react'
import classes from './Person.css';

const person = (props) => {
    console.log('[Person.js] rendring...');
    return (
<div className={classes.Person}>
    <p onClick={props.click}>I am a {props.name} year old{props.age}!</p>
    <p>{props.children}</p>
    <input type="text" onChange={props.changed} value={props.name}/>
</div>
    )
};
export default person;