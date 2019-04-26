import React from 'react'

const Form = (props) => {
    const { valueTempoMin, valueTempoSec, valueDistance, changeTempoMin, changeTempoSec, changeDistance } = props
    return (
        <>
            <fieldset>
                <legend>Planowane tempo biegu</legend>
                <label><input type="text" placeholder="min" value={valueTempoMin} onChange={changeTempoMin}></input>min</label>
                <label><input type="text" placeholder="sek" value={valueTempoSec} onChange={changeTempoSec}></input>sek</label>
            </fieldset>
            <label>Dystans odcinka:<input type="text" placeholder="metry" value={valueDistance} onChange={changeDistance}></input></label>
        </>
    )
}

export default Form