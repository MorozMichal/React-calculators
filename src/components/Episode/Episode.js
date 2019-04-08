import React, { Component } from 'react';
import ResultEpisode from './ResultEpisode'

class Episode extends Component {
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
                    <label><input type="text" placeholder="sek" value={tempoSek} onChange={this.handleTempoSek}></input>sek</label>
                </fieldset>
                <label>Dystans odcinka:<input type="text" placeholder="metry" value={distanceEpisode} onChange={this.handleDistanceEpisode}></input></label>
                <button onClick={this.handleReset}>wyczyść</button>
                <p>Czas odcinka: <ResultEpisode tempoMin={tempoMin} tempoSek={tempoSek} distanceEpisode={distanceEpisode} /></p>
            </>
        );
    }
}

export default Episode;