import React, { Component } from 'react';
import './App.css';

const generateTask = (value) => <li>{value}</li>;
const tasksArray = [
  'Study react',
  'Update GitHub',
  'Read a book about soft-skills'
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My To-do List</h1>
        <ol>
          {tasksArray.map((task) => generateTask(task))}
        </ol>
      </div>
    );
  }
}

export default App;
