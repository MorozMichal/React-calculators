import React, { Component } from 'react';
import './App.scss';
import Bmi from './Bmi/Bmi';
import Distance from './Distance/Distance';
import Episode from './Episode/Episode';
import Placeofrunning from './Placeofrunning/Placeofrunning';

class App extends Component {
  state = {
    clickBmi: false,
    clickDistance: false,
    clickEpisode: false,
    clickPlace: false,
  }

  handleClickBmi = () => {
    this.setState({
      clickBmi: true,
      clickDistance: false,
      clickEpisode: false,
      clickPlace: false,
    })
  }

  handleClickDistance = () => {
    this.setState({
      clickBmi: false,
      clickDistance: true,
      clickEpisode: false,
      clickPlace: false,
    })
  }

  handleClickEpisode = () => {
    this.setState({
      clickBmi: false,
      clickDistance: false,
      clickEpisode: true,
      clickPlace: false,
    })
  }

  handleClickPlace = () => {
    this.setState({
      clickBmi: false,
      clickDistance: false,
      clickEpisode: false,
      clickPlace: true,
    })
  }


  render() {
    return (
      <>
        <section className="section-calculators clickAreas">
          <div className="section-calculators-content">
            {/* <hr /> */}
            <div style={this.state.clickBmi ? { backgroundColor: "red" } : { display: "none" }}>
              <Bmi />
            </div>
            {/* <hr /> */}
            <div style={this.state.clickDistance ? { backgroundColor: "red" } : { display: "none" }}>
              <Distance />
            </div>
            {/* <hr /> */}
            <div style={this.state.clickEpisode ? { backgroundColor: "red" } : { display: "none" }}>
              <Episode />
            </div>
            {/* <hr /> */}
            <div style={this.state.clickPlace ? { backgroundColor: "red" } : { display: "none" }}>
              <Placeofrunning />
            </div>
            {/* <hr /> */}
          </div>

          <div className="section-calculators-header">
            <h2 onClick={this.handleClickBmi}><i className="far fa-smile-wink"></i>BMI</h2>
            <h2 onClick={this.handleClickDistance}><i className="fas fa-route"></i>odległość</h2>
            <h2 onClick={this.handleClickEpisode}><i className="fas fa-stopwatch"></i>czas odcinka</h2>
            <h2 onClick={this.handleClickPlace}><i className="fas fa-running"></i>tempo biegu</h2>
          </div>
        </section>
      </>
    );
  }
}

export default App;
