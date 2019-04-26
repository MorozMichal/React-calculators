import React from 'react'

const TimeMin = (props) => {
    return (
        <>
            <label><input type="text" placeholder="minut" onChange={props.changeTimeMin} value={props.valueTimeMin}></input>minut</label>
        </>
    )
}
export default TimeMin