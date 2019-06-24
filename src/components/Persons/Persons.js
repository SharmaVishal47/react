import React, {Component} from 'react';

import Person from "./Person/Person";

class Persons extends Component{
    static getDerivedStateFromProps(props, state) {
        console.log('GetDerivedState');
        return state;
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('')
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
