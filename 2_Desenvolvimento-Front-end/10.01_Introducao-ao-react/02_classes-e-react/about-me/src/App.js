import React, { Component } from 'react';
import './App.css';
import picOfMe from './picOfMe.jpg'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Raphael Martins</h1>
        <img src={picOfMe} alt="Minha foto"></img>
        <div>
          <p>I am a 27-year-old Brazilian who lives in São Paulo, Brazil. I am a nerd boy who loves technology, pop music, comic books, and games. Nowadays, I am studying Web Development at Trybe, and I am very excited about this new chapter of my life. I also want to learn mobile development soon.</p>
          <p>I am a very creative person who likes to take on challenges and solve problems. Technology is a powerful tool that can change the world for the better. I am very dynamic, and I don’t like to be stagnant. If something is bothering me in both my personal and professional lives, I will actively be searching for solutions. I prefer to be around people with a growth mindset.</p>
        </div>
      </div>
    );
  }
}

export default App;
