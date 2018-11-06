import React from 'react';
import './App.css';
import Dispatch from './components/Dispatch';
import GetState from './components/GetState';
import FilterParent from './components/FilterParent';

const App = () => (
  <div className="App">
    Redux test
    <Dispatch />
    <GetState />
    <FilterParent />
  </div>
);

export default App;
