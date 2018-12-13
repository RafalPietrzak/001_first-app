import React from 'react';
import classes from './Person.css';


const person = (props) =>{


return (
<div className = {classes.Person} >
    
    <p onClick={props.click}>I'm {props.name} not a computer! I have {props.age} yers key</p>
    <p>{props.children}</p>
    <input type = "text" onChange = {props.changed} value={props.name}/>
</div>)
}

export default person;
