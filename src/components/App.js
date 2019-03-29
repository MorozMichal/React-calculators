import React, { Component } from 'react';
import './App.css';

const Result = (props) => {
  const result = (props.wzrost / props.waga).toFixed(2)
  if (props.wzrost <= 0 || props.waga <= 0) {
    return "Podaj niezbędne dane"
  } else {
    return result
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

  render() {
    const { wzrost, waga } = this.state
    return (
      <div className="div-wrapper">
        <h1>kalkulator bmi</h1>
        <label htmlFor="wzrost">Podaj wzrost w cm</label>
        <input id="wzrost" value={wzrost} onChange={this.handleWzrost} type="text" placeholder="wpisz dane"></input>
        <label htmlFor="waga">Podaj wagę w kg</label>
        <input id="waga" value={waga} onChange={this.handleWaga} type="text" placeholder="wpisz dane"></input>
        <p className="info">Przy wzroście {wzrost} oraz wadze {waga} Twój współczynnik BMI wynosi:</p>      <p className="result"><Result wzrost={wzrost} waga={waga} /></p>
      </div>
    )
  }
}

export default App;
