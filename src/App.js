import React, {Component, useState} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
    state = {
        persons: [
            {name: "Vaughn", age: 34},
            {name: "Andrea", age: 34},
            {name: "Ronin", age: 5}
        ],
        otherState: "Some other state that shouldn't get overridden"
    };

    switchNameHandler = (newName) => {
        this.setState({ // setState will not merge state like in class-based. It will replace state
            persons: [
                {name: newName, age: 1},
                {name: "Aye", age: 2},
                {name: "Ro", age: 3},
            ]
        });
    }

    changeName = (event) => {
        this.setState({
            persons: [
                {name: "Vaughn", age: 1},
                {name: event.target.value, age: 2},
                {name: "Ro", age: 3},
            ]
        });
    }

    render() {
        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p>This works!</p>
                // This behaves the same way as the call on line 39 below. The function needs parens however
                // because it's being passed a function that will get executed within the anonymous function.
                <button onClick={() => this.switchNameHandler("VEE")}>Switch Name</button>
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}>I'm a child!</Person>
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                    // Need to bind this in class context. This is more efficient as it does not need to go through an extra function
                    click={this.switchNameHandler.bind(this, "VMoney")}
                    change={this.changeName}/>
                <Person
                    name={this.state.persons[2].name}
                    age={this.state.persons[2].age}/>
            </div>
        );

    }

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App'));

}

export default App;
