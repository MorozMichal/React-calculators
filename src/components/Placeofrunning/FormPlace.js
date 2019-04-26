import React from 'react'

const FormPlace = (props) => {
    const { valueSelect, changeSelect, valueDistanceKm, changeDistanceKm, valueDistanceM, changeDistanceM,
        valueTimeH, changeTimeH, valueTimeMin, changeTimeMin, valueTimeSek, changeTimeSek } = props
    return (
        <>
            <select value={valueSelect} onChange={changeSelect}>
                <option value="0">Wybierz dystans</option>
                <option value="1">1 km</option>
                <option value="3">3 km</option>
                <option value="5">5 km</option>
                <option value="10">10 km</option>
                <option value="12">12 km</option>
                <option value="15">15 km</option>
                <option value="21.097">21.097 km (półmaraton)</option>
                <option value="30">30 km</option>
                <option value="42.195">42.195 km (maraton)</option>
            </select>
            <fieldset>
                <legend>lub podaj</legend>
                <label><input type="text" placeholder="kilometry" value={valueDistanceKm} onChange={changeDistanceKm}></input>km</label>
                <label><input type="text" placeholder="metry" value={valueDistanceM} onChange={changeDistanceM}></input>m</label>
            </fieldset>
            <fieldset>
                <legend>Planowany wynik</legend>
                <label><input type="text" placeholder="godzin" value={valueTimeH} onChange={changeTimeH}></input>h</label>
                <label><input type="text" placeholder="minut" value={valueTimeMin} onChange={changeTimeMin}></input>min</label>
                <label><input type="text" placeholder="sekund" value={valueTimeSek} onChange={changeTimeSek}></input>sek</label>
            </fieldset>
        </>
    )
}

export default FormPlace