import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Test } from './components/test';
import { Button } from './components/button';

function App() {
  return (
    <div className="App">
      <Test test="test" test2={0}/>
      <Button />
    </div>
  );
}

export default App;
