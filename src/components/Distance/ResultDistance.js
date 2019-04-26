import React from 'react';

const ResultDistance = (props) => {
    const { tempoMin, tempoSec, timeH, timeMin, timeSec } = props

    const tempoResult = (tempoMin * 1) * 60 + (tempoSec * 1);
    const timeResult = (timeH * 1) * 3600 + (timeMin * 1) * 60 + (timeSec * 1);

    const distanceKm = Math.floor(timeResult / tempoResult);
    const distanceM = Math.round((timeResult / tempoResult) * 1000 - distanceKm * 1000);

    return (
        <>
            <h1>{tempoResult > 0 && timeResult > 0 ? `Przebyty dystans to: ${distanceKm} km ${distanceM} m` : `PROSZĘ PODAĆ PRAWIDŁOWE DANE`}</h1>
        </>
    )
};

export default ResultDistance