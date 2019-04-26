import React, { Component } from 'react';
import ResultDistance from './ResultDistance'
import FormDistance from './FormDistance'
import ButtonReset from '../Button/ButtonReset'

class Distance extends Component {

    state = {
        tempoMin: "",
        tempoSec: "",
        timeH: "",
        timeMin: "",
        timeSec: "",

    }

    handleTempoMin = e => {
        this.setState({
            tempoMin: e.target.value
        })
    }

    handleTempoSec = e => {
        this.setState({
            tempoSec: e.target.value
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

    handleTimeSec = e => {
        this.setState({
            timeSec: e.target.value
        })
    }

    handleReset = () => {
        this.setState({
            tempoMin: "",
            tempoSec: "",
            timeH: "",
            timeMin: "",
            timeSec: "",

        })
    }

    render() {
        const { tempoMin, tempoSec, timeH, timeMin, timeSec } = this.state;

        return (
            <>
                <h1>kalkulator dystansu</h1>
                <FormDistance
                    valueTempoMin={tempoMin}
                    valueTempoSec={tempoSec}
                    changeTempoMin={this.handleTempoMin}
                    changeTempoSec={this.handleTempoSec}
                    valueTimeH={timeH}
                    valueTimeMin={timeMin}
                    valueTimeSec={timeSec}
                    changeTimeH={this.handleTimeH}
                    changeTimeMin={this.handleTimeMin}
                    changeTimeSec={this.handleTimeSec}
                />
                <ButtonReset
                    click={this.handleReset}
                />
                <ResultDistance
                    tempoMin={tempoMin}
                    tempoSec={tempoSec}
                    timeH={timeH}
                    timeMin={timeMin}
                    timeSec={timeSec}
                />
            </>
        );
    }
}

export default Distance;