import React, { Component } from 'react';
import ResultPlace from './ResultPlace';
import ButtonReset from '../Button/ButtonReset'



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
                <select value={selectDistance} onChange={this.handleSelectDistance}>
                    <option value="0">Wybierz dystans</option>
                    <option value="1">1 km</option>
                    <option value="3">3 km</option>
                    <option value="5">5 km</option>
                    <option value="10">10 km</option>
                    <option value="12">12 km</option>
                    <option value="15">15 km</option>
                    <option value="21.097">21.097 km (półmaraton)</option>
                    <option value="30">30 km</option>
                    <option value="42.195">42.195 km (maraton)</option>
                </select>
                <fieldset>
                    <legend>lub podaj</legend>
                    <label><input type="text" placeholder="kilometry" value={distanceKm} onChange={this.handleDistanceKm}></input>km</label>
                    <label><input type="text" placeholder="metry" value={distanceM} onChange={this.handleDistanceM}></input>m</label>
                </fieldset>
                <fieldset>
                    <legend>Planowany wynik</legend>
                    <label><input type="text" placeholder="godzin" value={timeH} onChange={this.handleTimeH}></input>h</label>
                    <label><input type="text" placeholder="minut" value={timeMin} onChange={this.handleTimeMin}></input>min</label>
                    <label><input type="text" placeholder="sekund" value={timeSek} onChange={this.handleTimeSek}></input>sek</label>
                </fieldset>
                <ButtonReset
                    click={this.handleReset}
                />
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