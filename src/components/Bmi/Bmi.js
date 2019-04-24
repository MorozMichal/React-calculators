import React, { Component } from 'react';
import ResultBmi from './ResultBmi'

class Bmi extends Component {
    state = {
        wzrost: "",
        waga: "",
    }

    handleWzrost = (e) => {
        this.setState({
            wzrost: e.target.value
        })
    }

    handleWaga = (e) => {
        this.setState({
            waga: e.target.value
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

        const styleButton = {
            color: "black"
        }
        return (
            <div className="div-wrapper">
                <h1>kalkulator bmi</h1>
                <label htmlFor="wzrost">Podaj wzrost w cm</label>
                <input id="wzrost" value={wzrost} onChange={this.handleWzrost} type="text" placeholder="wpisz dane"></input>
                <label htmlFor="waga">Podaj wagę w kg</label>
                <input id="waga" value={waga} onChange={this.handleWaga} type="text" placeholder="wpisz dane"></input>
                <button onClick={this.handleReset} style={styleButton}>Wyczyść dane</button>
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