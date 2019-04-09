import React from 'react';

const ResultPlace = (props) => {

    const timeH = props.timeH * 1;
    const timeMin = props.timeMin * 1;
    const timeSek = props.timeSek * 1;
    const distanceKm = props.distanceKm * 1;
    const distanceM = props.distanceM * 1;
    const selectDistance = props.selectDistance * 1;
    let distance = 0;

    if (selectDistance > 0) {
        distance = selectDistance;
    } else {
        distance = distanceKm + distanceM / 1000;
    }

    const time = (timeH * 3600 + timeMin * 60 + timeSek) / 3600;
    const speed = Math.round((distance / time) * 1000) / 1000;

    const timeKm = Math.floor((timeH * 3600 + timeMin * 60 + timeSek) / distance);
    const timeMinut = Math.floor(timeKm / 60);
    const timeSekund = Math.round(timeKm - Math.round(timeMinut) * 60);


    return (
        <>
            <h1>{timeH + timeMin + timeSek > 0 && distanceKm + distanceM + selectDistance > 0 ? `Twoje tempo: ${timeMinut}' ${timeSekund}" /km, Twoja prędkość: ${speed} km/h` : "PROSZĘ PODAĆ PRAWIDŁOWE DANE"} </h1>

        </>
    )
}

export default ResultPlace

