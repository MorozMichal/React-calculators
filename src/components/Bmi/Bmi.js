import React, { Component } from 'react';
import ResultBmi from './ResultBmi'
import ButtonReset from '../Button/ButtonReset'
import FormBmi from './Form'

class Bmi extends Component {
    state = {
        wzrost: "",
        waga: "",
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    handleReset = () => {
        this.setState({
            waga: "",
            wzrost: ""
        })
    }


    render() {
        const { wzrost, waga } = this.state
        return (
            <div className="div-wrapper">
                <h1>kalkulator bmi</h1>
                <FormBmi
                    valueWzrost={wzrost}
                    valueWaga={waga}
                    change={this.handleChange}
                />
                {(waga || wzrost) > 0 &&
                    <ButtonReset
                        click={this.handleReset}
                    />}
                <p className="info">Przy wzroście {wzrost} oraz wadze {waga} Twój współczynnik BMI wynosi:</p>
                <ResultBmi
                    wzrost={wzrost}
                    waga={waga}
                />
            </div>
        )
    }
}

export default Bmi;