import React from 'react'

const TempoMin = (props) => {
    return (
        <>
            <label><input type="text" placeholder="minut" onChange={props.changeTempoMin} value={props.valueTempoMin}></input>min</label>
        </>
    )
}
export default TempoMin