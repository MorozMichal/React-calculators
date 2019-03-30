import React, { Component } from 'react';
import './App.css';

const Result = (props) => {
  const tempoEpisode = (props.tempoMin * 1) * 60 + (props.tempoSek * 1);
  let timeEpisode = (tempoEpisode / 1000) * (props.distanceEpisode * 1);
  const episodeH = Math.floor(timeEpisode / 3600);

  timeEpisode = timeEpisode - episodeH * 3600;
  const episodeMin = Math.floor(timeEpisode / 60);
  const episodeSek = Math.round(timeEpisode - Math.round(episodeMin) * 60);

  if (props.tempoMin + props.tempoSek > 0) {
    return `${episodeH} godz ${episodeMin} min ${episodeSek} sek`;
  } else {
    return "PROSZĘ PODAĆ PRAWIDŁOWE DANE";
  }
};


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
        <p>Czas odcinka: <Result tempoMin={tempoMin} tempoSek={tempoSek} distanceEpisode={distanceEpisode} /></p>
      </>
    );
  }
}

export default App;
