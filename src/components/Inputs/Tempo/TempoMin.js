import React from 'react'

const TempoMin = (props) => {
    return (
        <>
            <label><input name="tempoMin" type="text" placeholder="minut" onChange={props.change} value={props.valueTempoMin}></input>min</label>
        </>
    )
}
export default TempoMin