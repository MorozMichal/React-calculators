import React from 'react';

const ResultDistance = (props) => {

    const tempoResult = (props.tempoMin * 1) * 60 + (props.tempoSek * 1);
    const timeResult = (props.timeH * 1) * 3600 + (props.timeMin * 1) * 60 + (props.timeSek * 1);

    const distanceKm = Math.floor(timeResult / tempoResult);
    const distanceM = Math.round((timeResult / tempoResult) * 1000 - distanceKm * 1000);

    return (
        <>
            <h1>{tempoResult > 0 && timeResult > 0 ? `Przebyty dystans to: ${distanceKm} km ${distanceM} m` : `PROSZĘ PODAĆ PRAWIDŁOWE DANE`}</h1>
        </>
    )
};

export default ResultDistance