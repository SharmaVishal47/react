import React, {useEffect, useRef} from 'react';
import classes from "./Cockpit.css";

const  Cockpit = (props) => {
    const toogleBtnRef = useRef(null);
    useEffect(() => {
        console.log('useEffect');
       /* setTimeout(() => {
            alert('Saved Data to cloud');
        },1000);*/
       toogleBtnRef.current.click();
        return ()=>{

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

    if(props.personsLength <= 2){
        assignedClasses.push(classes.red);
    }
    if(props.personsLength <=1){
        assignedClasses.push(classes.bold);
    }

  return (
      <div className={classes.Cockpit}>
      <h1>  first react app </h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
    <button ref={toogleBtnRef}
        className={btnClass}
        onClick={props.clicked}>Toggle Persons</button>
          <button onClick={props.login}>Log in</button>
      </div>
  );
};

export default React.memo(Cockpit);