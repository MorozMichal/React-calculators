import React from 'react'

const Form = (props) => {
    const { valueTempoMin, valueTempoSec, valueDistance, change } = props
    return (
        <>
            <fieldset>
                <legend>Planowane tempo biegu</legend>
                <label><input name="tempoMin" type="text" placeholder="min" value={valueTempoMin} onChange={change}></input>min</label>
                <label><input name="tempoSec" type="text" placeholder="sek" value={valueTempoSec} onChange={change}></input>sek</label>
            </fieldset>
            <label>Dystans odcinka:<input name="distanceEpisode" type="text" placeholder="metry" value={valueDistance} onChange={change}></input></label>
        </>
    )
}

export default Form