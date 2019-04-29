import React from 'react'

const TimeSec = (props) => {
    return (
        <>
            <label><input name="timeSec" type="text" placeholder="sekund" onChange={props.change} value={props.valueTimeSec}></input>sekund</label>
        </>
    )
}
export default TimeSec