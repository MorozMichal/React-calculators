import React from 'react';

const ResultEpisode = (props) => {
    const tempoEpisode = (props.tempoMin * 1) * 60 + (props.tempoSek * 1);
    let timeEpisode = (tempoEpisode / 1000) * (props.distanceEpisode * 1);
    const episodeH = Math.floor(timeEpisode / 3600);

    timeEpisode = timeEpisode - episodeH * 3600;
    const episodeMin = Math.floor(timeEpisode / 60);
    const episodeSek = Math.round(timeEpisode - Math.round(episodeMin) * 60);

    return (
        <>
            <h1>{props.tempoMin + props.tempoSek > 0 ? `Czas odcinka: ${episodeH} godz ${episodeMin} min ${episodeSek} sek` : `PROSZĘ PODAĆ PRAWIDŁOWE DANE`}</h1>
        </>
    )
};

export default ResultEpisode