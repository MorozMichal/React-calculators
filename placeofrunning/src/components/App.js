import React, { Component } from 'react';
import './App.css';

const ResultTempo = () => {
  return "tu bedzie watość tempa"
}

const ResultSpeed = () => {
  return "tu bedzie wartość prędkości"
}


class App extends Component {
  state = {
    selectDistance: "",
    distanceKm: "",
    distanceM: "",
    timeH: "",
    timeMin: "",
    timeSek: "",
  }

  handleSelectDistance = (e) => {
    this.setState({
      selectDistance: e.target.value
    })
  }

  handleDistanceKm = (e) => {
    this.setState({
      distanceKm: e.target.value
    })
  }

  handleDistanceM = (e) => {
    this.setState({
      distanceM: e.target.value
    })
  }

  handleTimeH = (e) => {
    this.setState({
      timeH: e.target.value
    })
  }

  handleTimeMin = (e) => {
    this.setState({
      timeMin: e.target.value
    })
  }

  handleTimeSek = (e) => {
    this.setState({
      timeSek: e.target.value
    })
  }

  handleReset = () => {
    this.setState({
      selectDistance: "",
      distanceKm: "",
      distanceM: "",
      timeH: "",
      timeMin: "",
      timeSek: "",
    })
  }

  render() {

    const { selectDistance, distanceKm, distanceM, timeH, timeMin, timeSek } = this.state
    return (
      <>
        <h1>Kalkulator tempa biegu</h1>
        <select onChange={this.handleSelectDistance}>
          <option value="0">Wybierz dystans</option>
          <option value="1">1 km</option>
          <option value="3">3 km</option>
          <option value="5">5 km</option>
          <option value="10">10 km</option>
          <option value="12">12 km</option>
          <option value="15">15 km</option>
          <option value="21.097">21.097 km (półmaraton)</option>
          <option value="30">30 km</option>
          <option value="42.195">42.195 km (maraton)</option>
        </select>
        <p>{selectDistance}</p>
        <fieldset>
          <legend>lub podaj</legend>
          <label><input type="text" placeholder="kilometry" value={distanceKm} onChange={this.handleDistanceKm}></input>km</label>
          <p>{distanceKm}</p>
          <label><input type="text" placeholder="metry" value={distanceM} onChange={this.handleDistanceM}></input>m</label>
          <p>{distanceM}</p>
        </fieldset>
        <fieldset>
          <legend>Planowany wynik</legend>
          <label><input type="text" placeholder="godzin" value={timeH} onChange={this.handleTimeH}></input>h</label>
          <p>{timeH}</p>
          <label><input type="text" placeholder="minut" value={timeMin} onChange={this.handleTimeMin}></input>min</label>
          <p>{timeMin}</p>
          <label><input type="text" placeholder="sekund" value={timeSek} onChange={this.handleTimeSek}></input>sek</label>
          <p>{timeSek}</p>
        </fieldset>
        <button onClick={this.handleReset}>wyczyść</button>
        <p>Tempo: <ResultTempo /></p>
        <p>Prędkość: <ResultSpeed /></p>
      </>
    );
  }
}

export default App;
