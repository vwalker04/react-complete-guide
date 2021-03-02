import React, {useState} from 'react';
import './App.css';
import Person from './Person/Person'

const app = props => {
    const [personsState, setPersonsState] = useState({
        persons: [
            {name: "Vaughn", age: 34},
            {name: "Andrea", age: 34},
            {name: "Ronin", age: 5}
        ],
        otherState: "Some other state that shouldn't get overridden"
    });

    console.log(personsState);

    const switchNameHandler = () => {
        setPersonsState({ // setState will not merge state like in class-based. It will replace state
            persons: [
                {name: "Vee", age: 1},
                {name: "Aye", age: 2},
                {name: "Ro", age: 3},
            ]
        });
    }
    return (
        <div className="App">
            <h1>Hi, I'm a React App</h1>
            <p>This works!</p>
            <button onClick={switchNameHandler}>Switch Name</button>
            <Person name={personsState.persons[0].name} age={personsState.persons[0].age}>I'm a child!</Person>
            <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
            <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
        </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App'));

}

export default app;
