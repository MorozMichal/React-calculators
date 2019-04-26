import React from 'react'

const TimeH = (props) => {
    return (
        <>
            <label><input type="text" placeholder="godzin" onChange={props.changeTimeH} value={props.valueTimeH}></input>godzin</label>
        </>
    )
}
export default TimeH