import React, { Component } from 'react';
import './App.scss';
import Bmi from './Bmi/Bmi';
import Distance from './Distance/Distance';
import Episode from './Episode/Episode';
import Placeofrunning from './Placeofrunning/Placeofrunning';
import Menu from './Menu/Menu';

class App extends Component {
  render() {
    return (
      <>
        <section className="section-calculators clickAreas">
          <div className="section-calculators-content">
            <hr />
            <Bmi />
            <hr />
            <Distance />
            <hr />
            <Episode />
            <hr />
            <Placeofrunning />
            <hr />
          </div>
          <Menu />
        </section>
      </>
    );
  }
}

export default App;
