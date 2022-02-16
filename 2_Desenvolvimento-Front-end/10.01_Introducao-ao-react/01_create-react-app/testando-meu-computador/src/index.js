import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

function tick() {
  const element = (
    <div className='hello-world'>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString('pt', { hour12: true })}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);