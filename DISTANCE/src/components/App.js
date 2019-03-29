import React, { Component } from 'react';
import './App.css';

const Result = () => {
  return "Tu bedzie wynik"
}

class App extends Component {

  state = {
    TempoMin: "",
    TempoSek: "",
    TimeH: "",
    TimeMin: "",
    TimeSek: "",
  }

  handleTempoMin = e => {
    this.setState({
      TempoMin: e.target.value
    })
  }

  handleTempoSek = e => {
    this.setState({
      TempoSek: e.target.value
    })
  }

  handleTimeH = e => {
    this.setState({
      TimeH: e.target.value
    })
  }

  handleTimeMin = e => {
    this.setState({
      TimeMin: e.target.value
    })
  }

  handleTimeSek = e => {
    this.setState({
      TimeSek: e.target.value
    })
  }

  handleReset = () => {
    this.setState({
      TempoMin: "",
      TempoSek: "",
      TimeH: "",
      TimeMin: "",
      TimeSek: "",
    })
  }

  render() {
    const { TempoMin, TempoSek, TimeH, TimeMin, TimeSek } = this.state;

    return (
      <>
        <h1>kalkulator dystansu</h1>
        <fieldset>
          <legend>Planowane tempo biegu</legend>
          <label><input type="text" placeholder="minut" onChange={this.handleTempoMin} value={TempoMin}></input>min</label>
          <span>{TempoMin}</span>
          <label><input type="text" placeholder="sekund" onChange={this.handleTempoSek} value={TempoSek}></input>sek</label>
          <span>{TempoSek}</span>
        </fieldset>
        <fieldset>
          <legend>Planowany czas biegu</legend>
          <label><input type="text" placeholder="godzin" onChange={this.handleTimeH} value={TimeH}></input>godzin</label>
          <span>{TimeH}</span>
          <label><input type="text" placeholder="minut" onChange={this.handleTimeMin} value={TimeMin}></input>minut</label>
          <span>{TimeMin}</span>
          <label><input type="text" placeholder="sekund" onChange={this.handleTimeSek} value={TimeSek}></input>sekund</label>
          <span>{TimeSek}</span>
        </fieldset>
        <button onClick={this.handleReset}>Wyczyść</button>
        <p>Przebyty dystans to: <Result /></p>

      </>
    );
  }
}

export default App;
