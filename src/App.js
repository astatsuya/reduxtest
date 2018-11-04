import React from 'react';
import './App.css';
import Dispatch from './components/Dispatch';
import GetState from './components/GetState';

const App = () => (
  <div>
    Redux test
    <Dispatch />
    <GetState />
  </div>
);

export default App;
