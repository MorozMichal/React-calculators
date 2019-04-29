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

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
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
                    change={this.handleChange}
                    valueTimeH={timeH}
                    valueTimeMin={timeMin}
                    valueTimeSec={timeSec}

                />
                {
                    (tempoMin || tempoSec || timeH || timeMin || timeSec) > 0 &&
                    <ButtonReset
                        click={this.handleReset}
                    />}
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