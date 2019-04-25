import React, { Component } from 'react';
import ResultEpisode from './ResultEpisode'
import Form from './Form'
import ButtonReset from './ButtonReset'

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
                <Form
                    valueTempoMin={tempoMin}
                    valueTempoSek={tempoSek}
                    valueDistance={distanceEpisode}
                    changeTempoMin={this.handleTempoMin}
                    changeTempoSek={this.handleTempoSek}
                    changeDistance={this.handleDistanceEpisode}
                />
                <ButtonReset
                    click={this.handleReset}
                />
                <ResultEpisode
                    tempoMin={tempoMin}
                    tempoSek={tempoSek}
                    distanceEpisode={distanceEpisode}
                />
            </>
        );
    }
}

export default Episode;