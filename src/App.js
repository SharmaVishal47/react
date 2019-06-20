import React, {useState} from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {

   const [personsState, setPersonsState ] = useState({
        persons:[
            {name : 'Vishu' , age: 28},
            {name : 'Suraj' , age: 27},
            {name : 'Max' , age: 29}
        ],


   });

   //const [otherState, setOtherState]= useState('some other value');

 const switchNameHandler = (newName) => {
     console.log('clicked');
     setPersonsState({persons:[
             {name : newName , age: 28},
             {name : 'Suraj' , age: 27},
             {name : 'Max' , age: 39}
         ]
     } )
 }
        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <button onClick={switchNameHandler.bind(this, 'Vishu123')}>Switch Name</button>
                <Person
                    name={personsState.persons[0].name}
                    age ={personsState.persons[0].age} />
                <Person
                    name={personsState.persons[1].name}
                    age ={personsState.persons[1].age}
                    click={switchNameHandler.bind(this,'Vishu 45')}>My Hobby - Racing</Person>
                <Person
                    name={personsState.persons[2].name}
                    age ={personsState.persons[2].age} />
            </div>
        );
 //return React.createElement('div',{className: 'App'},React.createElement('h1',null,'I am React app'));
};

export default App;

/*
state = {
    persons:[
        {name : 'Vishu' , age: 28},
        {name : 'Suraj' , age: 27},
        {name : 'Max' , age: 29}
    ]
}

switchNameHandler = () => {
    console.log('clicked');
    this.setState({persons:[
            {name : 'Vishu 1' , age: 28},
            {name : 'Suraj' , age: 27},
            {name : 'Max' , age: 39}
        ]
    } )
}*/
