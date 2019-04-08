import React, { Component } from 'react';
import './App.css';
import Bmi from './Bmi/Bmi';
import Distance from './Distance/Distance';
import Episode from './Episode/Episode';
import Placeofrunning from './Placeofrunning/Placeofrunning';

class App extends Component {
  render() {
    return (
      <>
        <Bmi />
        <hr />
        <Distance />
        <hr />
        <Episode />
        <hr />
        <Placeofrunning />
      </>
    );
  }
}

export default App;
