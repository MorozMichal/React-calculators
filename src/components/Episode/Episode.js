import React, { Component } from 'react';
import ResultEpisode from './ResultEpisode'
import Form from './Form'
import ButtonReset from '../Button/ButtonReset'

class Episode extends Component {
    state = {
        tempoMin: "",
        tempoSec: "",
        distanceEpisode: "",
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    handleReset = () => {
        this.setState({
            tempoMin: "",
            tempoSec: "",
            distanceEpisode: "",
        })
    }

    render() {
        const { tempoMin, tempoSec, distanceEpisode } = this.state;

        return (
            <>
                <h1>Kalkulator czasu odcinka</h1>
                <Form
                    valueTempoMin={tempoMin}
                    valueTempoSec={tempoSec}
                    valueDistance={distanceEpisode}
                    change={this.handleChange}

                />
                {(tempoMin || tempoSec || distanceEpisode) > 0 &&
                    <ButtonReset
                        click={this.handleReset}
                    />
                }
                <ResultEpisode
                    tempoMin={tempoMin}
                    tempoSec={tempoSec}
                    distanceEpisode={distanceEpisode}
                />
            </>
        );
    }
}

export default Episode;