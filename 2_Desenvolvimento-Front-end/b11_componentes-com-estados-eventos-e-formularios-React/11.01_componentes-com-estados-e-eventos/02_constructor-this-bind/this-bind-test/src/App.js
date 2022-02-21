import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(this);
    console.log('Clicou!');
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.handleClick}>Meu botão</button>
      </div>
    );
  }
}

export default App;
