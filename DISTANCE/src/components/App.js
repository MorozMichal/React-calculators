import React, { Component } from 'react';
import './App.css';

const Result = (props) => {

  const tempoResult = (props.tempoMin * 1) * 60 + (props.tempoSek * 1);
  const timeResult = (props.timeH * 1) * 3600 + (props.timeMin * 1) * 60 + (props.timeSek * 1);
  const distanceKm = Math.floor(timeResult / tempoResult);

  const distanceM = Math.round((timeResult / tempoResult) * 1000 - distanceKm * 1000);

  if (tempoResult > 0 && timeResult > 0) {
    return `${distanceKm} km ${distanceM} m`
  } else {
    return "PROSZĘ PODAC PRAWIDŁOWE DANE";
  }
};



class App extends Component {

  state = {
    tempoMin: "",
    tempoSek: "",
    timeH: "",
    timeMin: "",
    timeSek: "",
  }

  handleTempoMin = e => {
    this.setState({
      tempoMin: e.target.value
    })
  }

  handleTempoSek = e => {
    this.setState({
      tempoSek: e.target.value
    })
  }

  handleTimeH = e => {
    this.setState({
      timeH: e.target.value
    })
  }

  handleTimeMin = e => {
    this.setState({
      timeMin: e.target.value
    })
  }

  handleTimeSek = e => {
    this.setState({
      timeSek: e.target.value
    })
  }

  handleReset = () => {
    this.setState({
      tempoMin: "",
      tempoSek: "",
      timeH: "",
      timeMin: "",
      timeSek: "",
    })
  }

  render() {
    const { tempoMin, tempoSek, timeH, timeMin, timeSek } = this.state;

    return (
      <>
        <h1>kalkulator dystansu</h1>
        <fieldset>
          <legend>Planowane tempo biegu</legend>
          <label><input type="text" placeholder="minut" onChange={this.handleTempoMin} value={tempoMin}></input>min</label>
          <span>{tempoMin}</span>
          <label><input type="text" placeholder="sekund" onChange={this.handleTempoSek} value={tempoSek}></input>sek</label>
          <span>{tempoSek}</span>
        </fieldset>
        <fieldset>
          <legend>Planowany czas biegu</legend>
          <label><input type="text" placeholder="godzin" onChange={this.handleTimeH} value={timeH}></input>godzin</label>
          <span>{timeH}</span>
          <label><input type="text" placeholder="minut" onChange={this.handleTimeMin} value={timeMin}></input>minut</label>
          <span>{timeMin}</span>
          <label><input type="text" placeholder="sekund" onChange={this.handleTimeSek} value={timeSek}></input>sekund</label>
          <span>{timeSek}</span>
        </fieldset>
        <button onClick={this.handleReset}>Wyczyść</button>
        <p>Przebyty dystans to: <Result tempoMin={tempoMin} tempoSek={tempoSek} timeH={timeH} timeMin={timeMin} timeSek={timeSek} /></p>
      </>
    );
  }
}

export default App;
