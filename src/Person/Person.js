import React from 'react'

const person = (props) => {
    return (
<div>
    <p onClick={props.click}>I am a {props.name} year old{props.age}!</p>
    <p>{props.children}</p>

</div>

    )
};

export default person;