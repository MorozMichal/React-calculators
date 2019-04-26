import React from 'react'

const TempoSec = (props) => {
    return (
        <>
            <label><input type="text" placeholder="sekund" onChange={props.changeTempoSec} value={props.valueTempoSec}></input>sek</label>
        </>
    )
}
export default TempoSec