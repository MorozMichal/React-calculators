import React from 'react';

const ResultEpisode = (props) => {
    const { tempoMin, tempoSec, distanceEpisode } = props

    const tempoEpisode = (tempoMin * 1) * 60 + (tempoSec * 1);
    let timeEpisode = (tempoEpisode / 1000) * (distanceEpisode * 1);
    const episodeH = Math.floor(timeEpisode / 3600);

    timeEpisode = timeEpisode - episodeH * 3600;
    const episodeMin = Math.floor(timeEpisode / 60);
    const episodeSec = Math.round(timeEpisode - Math.round(episodeMin) * 60);

    return (
        <>
            <h1>{tempoMin + tempoSec > 0 ? `Czas odcinka: ${episodeH} godz ${episodeMin} min ${episodeSec} sek` : `PROSZĘ PODAĆ PRAWIDŁOWE DANE`}</h1>
        </>
    )
};

export default ResultEpisode