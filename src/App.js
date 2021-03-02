import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
    state = {
        persons: [
            {name: 'Vaughn', age: 34},
            {name: 'Andrea', age: 34},
            {name: 'Ronin', age: 5}
        ]
    }

    switchNameHandler = () => {
        console.log("Was clicked")
        this.setState({
            persons: [
                {name: 'BOB', age: 34},
                {name: 'BILLY', age: 34},
                {name: 'JOE', age: 5}
            ]
        })
    }


    render() {
        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p>This works!</p>
                <button onClick={this.switchNameHandler}>Switch Name</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>I'm a child!</Person>
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
            </div>
        );
        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App'));
    }
}

export default App;
