import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
