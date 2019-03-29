import React, { Component } from 'react';
import './App.css';

const Result = (props) => {
  const result = (props.waga / (((props.wzrost / 100) * props.wzrost) / 100)).toFixed(2)
  if (props.waga > 0 && props.wzrost > 0) {
    if (result < 16.0) {
      return result;
    } else if (result <= 16.99) {
      return `${result} - WYCHUDZENIE`;
    } else if (result <= 18.49) {
      return `${result} - NIEDOWAGA`;
    } else if (result <= 24.99) {
      return `${result} - PRAWIDŁOWA WAGA`;
    } else if (result <= 29.99) {
      return `${result}- NADWAGA`;
    } else if (result <= 34.99) {
      return `${result} - I STOPIEŃ OTYŁOŚCI`;
    } else if (result <= 39.99) {
      return `${result} - II STOPIEŃ OTYŁOŚCI`;
    } else {
      return `${result} - III STOPIEŃ OTYŁOŚCI`;
    }
  } else {
    return "PROSZĘ PODAĆ PRAWIDŁOWE DANE";
  }
}

class App extends Component {
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
    return (
      <div className="div-wrapper">
        <h1>kalkulator bmi</h1>
        <label htmlFor="wzrost">Podaj wzrost w cm</label>
        <input id="wzrost" value={wzrost} onChange={this.handleWzrost} type="text" placeholder="wpisz dane"></input>
        <label htmlFor="waga">Podaj wagę w kg</label>
        <input id="waga" value={waga} onChange={this.handleWaga} type="text" placeholder="wpisz dane"></input>
        <button onClick={this.handleReset}>Wyczyść dane</button>
        <p className="info">Przy wzroście {wzrost} oraz wadze {waga} Twój współczynnik BMI wynosi:</p>      <p className="result"><Result wzrost={wzrost} waga={waga} /></p>
      </div>
    )
  }
}

export default App;
