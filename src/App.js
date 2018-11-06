import React from 'react';
import './App.css';
import Dispatch from './components/Dispatch';
import GetState from './components/GetState';
import FilterParent from './components/FilterParent';

const App = () => (
  <div className="App">
    Redux Sort and Filter test
    <Dispatch />
    <br />
    <GetState />
    <br />
    <FilterParent />
  </div>
);

export default App;
