import React from 'react'

const FormDistance = (props) => {
    const { valueTimeH, valueTimeMin, valueTimeSek, valueTempoMin, valueTempoSek, changeTempoMin, changeTempoSek, changeTimeH, changeTimeMin, changeTimeSek } = props
    return (
        <>
            <fieldset>
                <legend>Planowane tempo biegu</legend>
                <label><input type="text" placeholder="minut" onChange={changeTempoMin} value={valueTempoMin}></input>min</label>
                <label><input type="text" placeholder="sekund" onChange={changeTempoSek} value={valueTempoSek}></input>sek</label>
            </fieldset>
            <fieldset>
                <legend>Planowany czas biegu</legend>
                <label><input type="text" placeholder="godzin" onChange={changeTimeH} value={valueTimeH}></input>godzin</label>
                <label><input type="text" placeholder="minut" onChange={changeTimeMin} value={valueTimeMin}></input>minut</label>
                <label><input type="text" placeholder="sekund" onChange={changeTimeSek} value={valueTimeSek}></input>sekund</label>
            </fieldset>

        </>
    )
}

export default FormDistance

