import React from 'react';
import GeoContainer from './components/geo-container/GeoContainer';

import './App.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <header className="geo-header">
        <h3 className="h1-header"> Geo Box</h3>
      </header>
      <GeoContainer />
    </div>
  );
}

export default App;
