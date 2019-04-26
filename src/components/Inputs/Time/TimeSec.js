import React from 'react'

const TimeSec = (props) => {
    return (
        <>
            <label><input type="text" placeholder="sekund" onChange={props.changeTimeSec} value={props.valueTimeSec}></input>sekund</label>
        </>
    )
}
export default TimeSec