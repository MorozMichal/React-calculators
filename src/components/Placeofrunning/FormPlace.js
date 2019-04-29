import React from 'react'

const FormPlace = (props) => {
    const { valueSelect, valueDistanceKm, change, valueDistanceM, valueTimeH, valueTimeMin, valueTimeSec } = props
    return (
        <>
            <select name="selectDistance" value={valueSelect} onChange={change}>
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
                <label><input name="distanceKm" type="text" placeholder="kilometry" value={valueDistanceKm} onChange={change}></input>km</label>
                <label><input name="distanceM" type="text" placeholder="metry" value={valueDistanceM} onChange={change}></input>m</label>
            </fieldset>
            <fieldset>
                <legend>Planowany wynik</legend>
                <label><input name="timeH" type="text" placeholder="godzin" value={valueTimeH} onChange={change}></input>h</label>
                <label><input name="timeMin" type="text" placeholder="minut" value={valueTimeMin} onChange={change}></input>min</label>
                <label><input name="timeSec" type="text" placeholder="sekund" value={valueTimeSec} onChange={change}></input>sek</label>
            </fieldset>
        </>
    )
}

export default FormPlace