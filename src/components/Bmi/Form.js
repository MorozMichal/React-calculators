import React from 'react'

const FormBmi = (props) => {
    const { valueWzrost, valueWaga, changeWzrost, changeWaga } = props
    return (
        <>
            <label htmlFor="wzrost">Podaj wzrost w cm</label>
            <input id="wzrost" value={valueWzrost} onChange={changeWzrost} type="text" placeholder="wpisz dane"></input>
            <label htmlFor="waga">Podaj wagę w kg</label>
            <input id="waga" value={valueWaga} onChange={changeWaga} type="text" placeholder="wpisz dane"></input>
        </>
    )
}
export default FormBmi

