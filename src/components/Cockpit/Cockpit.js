import React, {useEffect} from 'react';
import classes from "./Cockpit.css";

const  Cockpit = (props) => {
    useEffect(() => {
        console.log('useEffect');
        const timer = setTimeout(() => {
            alert('Saved Data to cloud');
        },1000);
        return ()=>{
            clearTimeout(timer);
            console.log('Cleanup work in effect');
        }
    },[]);

    useEffect(()=>{
        console.log('useEffect 2');
        return ()=>{
            console.log('Cleanup work in effect 2');
        }
    });

    let assignedClasses = [];
    let btnClass = '';
    if(props.showPersons){
        btnClass = classes.Red;
    }

    if(props.persons.length <= 2){
        assignedClasses.push(classes.red);
    }
    if(props.persons.length <=1){
        assignedClasses.push(classes.bold);
    }

  return (
      <div className={classes.Cockpit}>
      <h1>  first react app </h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
    <button
        className={btnClass}
        onClick={props.clicked}>Toggle Persons</button>
      </div>
  );
};

export default Cockpit;