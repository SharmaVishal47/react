import React, {Component} from 'react';

import Person from "./Person/Person";

class Persons extends Component{
   /* static getDerivedStateFromProps(props, state) {
        console.log('GetDerivedState');
        return state;
    }*/
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate');
        if (
            nextProps.persons !== this.props.persons ||
            nextProps.changed !== this.props.changed ||
            nextProps.clicked !== this.props.clicked
        ) {
            return true;
        } else {
            return false;
        }
    }
    getSnapshotBeforUpdate(prevProps, prevStte){
        console.log('getSnapshotbeforUpdate');
        return {message: 'Snapshot'};

    }
    componentDidUpdate(prevProps, prevStte, snapshot){
        console.log('componentDidUpdate');
        console.log(snapshot);
        return {message: 'Snapshot'};

    }


render(){
    console.log('[Person.js] rendering...');
    return this.props.persons.map((person, index) =>{
        return <Person
            click={() => this.props.clicked(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(event) => this.props.changed(event, person.id)}/>
    })
}
};
export default Persons;
