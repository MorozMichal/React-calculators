import React, { Component } from 'react';
import ResultDistance from './ResultDistance'
import FormDistance from './FormDistance'
import ButtonReset from '../Button/ButtonReset'

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


                <FormDistance
                    valueTempoMin={tempoMin}
                    valueTempoSek={tempoSek}
                    changeTempoMin={this.handleTempoMin}
                    changeTempoSek={this.handleTempoSek}
                    valueTimeH={timeH}
                    valueTimeMin={timeMin}
                    valueTimeSek={timeSek}
                    changeTimeH={this.handleTimeH}
                    changeTimeMin={this.handleTimeMin}
                    changeTimeSek={this.handleTimeSek}

                />

                <ButtonReset
                    click={this.handleReset}
                />
                <ResultDistance
                    tempoMin={tempoMin}
                    tempoSek={tempoSek}
                    timeH={timeH}
                    timeMin={timeMin}
                    timeSek={timeSek}
                />
            </>
        );
    }
}

export default Distance;