import React, { Component } from 'react';
import ResultDistance from './ResultDistance'

class Distance extends Component {

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
                    <label><input type="text" placeholder="sekund" onChange={this.handleTempoSek} value={tempoSek}></input>sek</label>
                </fieldset>
                <fieldset>
                    <legend>Planowany czas biegu</legend>
                    <label><input type="text" placeholder="godzin" onChange={this.handleTimeH} value={timeH}></input>godzin</label>
                    <label><input type="text" placeholder="minut" onChange={this.handleTimeMin} value={timeMin}></input>minut</label>
                    <label><input type="text" placeholder="sekund" onChange={this.handleTimeSek} value={timeSek}></input>sekund</label>
                </fieldset>
                <button onClick={this.handleReset}>Wyczyść</button>
                <ResultDistance tempoMin={tempoMin} tempoSek={tempoSek} timeH={timeH} timeMin={timeMin} timeSek={timeSek} />
            </>
        );
    }
}

export default Distance;