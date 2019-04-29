import React from 'react'

const TimeMin = (props) => {
    return (
        <>
            <label><input name="timeMin" type="text" placeholder="minut" onChange={props.change} value={props.valueTimeMin}></input>minut</label>
        </>
    )
}
export default TimeMin