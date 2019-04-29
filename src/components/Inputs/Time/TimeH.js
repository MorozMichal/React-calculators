import React from 'react'

const TimeH = (props) => {
    return (
        <>
            <label><input name="timeH" type="text" placeholder="godzin" onChange={props.change} value={props.valueTimeH}></input>godzin</label>
        </>
    )
}
export default TimeH