import React from 'react'

const FormBmi = (props) => {
    const { valueWzrost, valueWaga, change } = props
    return (
        <>
            <label htmlFor="wzrost">Podaj wzrost w cm</label>
            <input name="wzrost" id="wzrost" value={valueWzrost} onChange={change} type="text" placeholder="wpisz dane"></input>
            <label htmlFor="waga">Podaj wagę w kg</label>
            <input name="waga" id="waga" value={valueWaga} onChange={change} type="text" placeholder="wpisz dane"></input>
        </>
    )
}
export default FormBmi

