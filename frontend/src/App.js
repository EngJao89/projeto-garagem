import React from 'react';

import './App.css';

import logomarca33 from './assets/logomarca33.png';

import Routes from './routes';

function App() {
  return (
    <div className="container">
      <img src={logomarca33} alt="CarSale" />

      <div className="content">
        <Routes />
      </div>
    </div>
  );
}

export default App;
