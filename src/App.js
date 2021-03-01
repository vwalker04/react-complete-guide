import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <Person name={"Vaughn"} age={Math.floor(Math.random() * 100)}><p>hey</p></Person>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App'));
  }
}

export default App;
