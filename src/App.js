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
     setPersonsState({persons:[
             {name : newName , age: 28},
             {name : 'Suraj' , age: 27},
             {name : 'Max' , age: 39}
         ]
     } )
 }

 const nameChangeHandler = (event) => {

      setPersonsState({persons:[
              {name : 'Vishu' , age: 28},
              {name : event.target.value, age: 27},
              {name : 'Max' , age: 39}
          ]
      } )
  };

  const style = {
     backgroundColor : 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
  };
        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <button
                    style={style}
                    onClick={switchNameHandler.bind(this, 'Vishu123')}>Switch Name</button>
                <Person
                    name={personsState.persons[0].name}
                    age ={personsState.persons[0].age} />
                <Person
                    name={personsState.persons[1].name}
                    age ={personsState.persons[1].age}
                    click={switchNameHandler.bind(this,'Vishu 45')}
                change={nameChangeHandler}>My Hobby - Racing</Person>
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
