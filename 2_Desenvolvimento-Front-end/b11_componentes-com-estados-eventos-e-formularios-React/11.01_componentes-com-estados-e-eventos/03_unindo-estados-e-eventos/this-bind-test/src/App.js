import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      numberOfClicks: 0
    };
  }

  handleClick() {
    this.setState((state) => state.numberOfClicks += 1);
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.handleClick}>Meu botão foi clicado: <span>{this.state.numberOfClicks}</span> vezes</button>
      </div>
    );
  }
}

export default App;
