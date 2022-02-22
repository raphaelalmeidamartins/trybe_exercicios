import React, { Component } from 'react';
import './App.css';

const xablauClick = () => console.log('Xablau');
const barabamClick = () => console.log('Barabam');
const referenciaClick = () => console.log('Entendi a referencia');

class App extends Component {
  render() {
    return (
      <div className="App">
        <button onClick={xablauClick}>Xablau</button>
        <button onClick={barabamClick}>Barabam</button>
        <button onClick={referenciaClick}>Entendi a referência</button>
      </div>
    );
  }
}

export default App;
