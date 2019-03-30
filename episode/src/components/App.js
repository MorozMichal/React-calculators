import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    tempoMin: "",
    tempoSek: "",
    distanceEpisode: "",
  }

  handleTempoMin = (e) => {
    this.setState({
      tempoMin: e.target.value
    })
  }

  handleTempoSek = (e) => {
    this.setState({
      tempoSek: e.target.value
    })
  }

  handleDistanceEpisode = (e) => {
    this.setState({
      distanceEpisode: e.target.value
    })
  }

  handleReset = () => {
    this.setState({
      tempoMin: "",
      tempoSek: "",
      distanceEpisode: "",
    })
  }

  render() {
    const { tempoMin, tempoSek, distanceEpisode } = this.state;

    return (
      <>
        <h1>Kalkulator czasu odcinka</h1>
        <fieldset>
          <legend>Planowane tempo biegu</legend>
          <label><input type="text" placeholder="min" value={tempoMin} onChange={this.handleTempoMin}></input>min</label>
          <p>{tempoMin}</p>
          <label><input type="text" placeholder="sek" value={tempoSek} onChange={this.handleTempoSek}></input>sek</label>
          <p>{tempoSek}</p>
        </fieldset>
        <label>Dystans odcinka:<input type="text" placeholder="metry" value={distanceEpisode} onChange={this.handleDistanceEpisode}></input></label>
        <p>{distanceEpisode}</p>
        <button onClick={this.handleReset}>wyczyść</button>
        <p>Czas odcinka:</p>
        <p></p>
      </>
    );
  }
}

export default App;
