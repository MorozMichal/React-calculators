import React, { Component } from 'react';
import ResultPlace from './ResultPlace';
import ButtonReset from '../Button/ButtonReset'
import FormPlace from './FormPlace'



class Placeofrunning extends Component {
    state = {
        selectDistance: "",
        distanceKm: "",
        distanceM: "",
        timeH: "",
        timeMin: "",
        timeSec: "",
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleReset = () => {
        this.setState({
            selectDistance: "",
            distanceKm: "",
            distanceM: "",
            timeH: "",
            timeMin: "",
            timeSec: "",
        })
    }

    render() {
        const { selectDistance, distanceKm, distanceM, timeH, timeMin, timeSec } = this.state
        return (
            <>
                <h1>Kalkulator tempa biegu</h1>
                <FormPlace
                    valueSelect={selectDistance}
                    change={this.handleChange}
                    valueDistanceKm={distanceKm}
                    valueDistanceM={distanceM}
                    valueTimeH={timeH}
                    valueTimeMin={timeMin}
                    valueTimeSec={timeSec}

                />
                {(selectDistance || distanceKm || distanceM || timeH || timeMin || timeSec) > 0 &&
                    <ButtonReset
                        click={this.handleReset}
                    />
                }
                <ResultPlace
                    selectDistance={selectDistance}
                    distanceKm={distanceKm}
                    distanceM={distanceM}
                    timeH={timeH}
                    timeMin={timeMin}
                    timeSec={timeSec}
                />
            </>
        );
    }
}

export default Placeofrunning;