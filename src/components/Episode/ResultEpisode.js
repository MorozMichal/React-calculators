import React from 'react';

const ResultEpisode = (props) => {
    const { tempoMin, tempoSek, distanceEpisode } = props

    const tempoEpisode = (tempoMin * 1) * 60 + (tempoSek * 1);
    let timeEpisode = (tempoEpisode / 1000) * (distanceEpisode * 1);
    const episodeH = Math.floor(timeEpisode / 3600);

    timeEpisode = timeEpisode - episodeH * 3600;
    const episodeMin = Math.floor(timeEpisode / 60);
    const episodeSek = Math.round(timeEpisode - Math.round(episodeMin) * 60);

    return (
        <>
            <h1>{tempoMin + tempoSek > 0 ? `Czas odcinka: ${episodeH} godz ${episodeMin} min ${episodeSek} sek` : `PROSZĘ PODAĆ PRAWIDŁOWE DANE`}</h1>
        </>
    )
};

export default ResultEpisode