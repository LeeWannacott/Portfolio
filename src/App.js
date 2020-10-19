import React from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import NavBar from './layout/NavBar';
import Projects from './layout/Projects';


function App() {
  return (

    <div className="App">

      <header><NavBar /></header>
      <footer></footer>
    </div>
  );
}




export default App;
