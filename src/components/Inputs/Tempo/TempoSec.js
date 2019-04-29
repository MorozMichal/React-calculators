import React from 'react'

const TempoSec = (props) => {
    return (
        <>
            <label><input name="tempoSec" type="text" placeholder="sekund" onChange={props.change} value={props.valueTempoSec}></input>sek</label>
        </>
    )
}
export default TempoSec