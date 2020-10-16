import React from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import Navigation from './layout/Navigation';


function App() {
  return (
    <div className="App">
    <header><Navigation className="App-header"/></header>
    <footer><p>hello</p></footer>
    </div>
  );
}




export default App;
