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
        timeSek: "",
    }

    handleSelectDistance = (e) => {
        this.setState({
            selectDistance: e.target.value
        })
    }

    handleDistanceKm = (e) => {
        this.setState({
            distanceKm: e.target.value
        })
    }

    handleDistanceM = (e) => {
        this.setState({
            distanceM: e.target.value
        })
    }

    handleTimeH = (e) => {
        this.setState({
            timeH: e.target.value
        })
    }

    handleTimeMin = (e) => {
        this.setState({
            timeMin: e.target.value
        })
    }

    handleTimeSek = (e) => {
        this.setState({
            timeSek: e.target.value
        })
    }

    handleReset = () => {
        this.setState({
            selectDistance: "",
            distanceKm: "",
            distanceM: "",
            timeH: "",
            timeMin: "",
            timeSek: "",
        })
    }

    render() {
        const { selectDistance, distanceKm, distanceM, timeH, timeMin, timeSek } = this.state
        return (
            <>
                <h1>Kalkulator tempa biegu</h1>
                <FormPlace
                    valueSelect={selectDistance}
                    changeSelect={this.handleSelectDistance}
                    valueDistanceKm={distanceKm}
                    changeDistanceKm={this.handleDistanceKm}
                    valueDistanceM={distanceM}
                    changeDistanceM={this.handleDistanceM}
                    valueTimeH={timeH}
                    changeTimeH={this.handleTimeH}
                    valueTimeMin={timeMin}
                    changeTimeMin={this.handleTimeMin}
                    valueTimeSek={timeSek}
                    changeTimeSek={this.handleTimeSek}
                />
                {(selectDistance || distanceKm || distanceM || timeH || timeMin || timeSek) > 0 &&
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
                    timeSek={timeSek}
                />
            </>
        );
    }
}

export default Placeofrunning;