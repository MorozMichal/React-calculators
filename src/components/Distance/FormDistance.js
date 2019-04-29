import React from 'react'
import TimeH from '../Inputs/Time/TimeH'
import TimeMin from '../Inputs/Time/TimeMin'
import TimeSec from '../Inputs/Time/TimeSec'
import TempoMin from '../Inputs/Tempo/TempoMin'
import TempoSec from '../Inputs/Tempo/TempoSec'

const FormDistance = (props) => {
    return (
        <>
            <fieldset>
                <legend>Planowane tempo biegu</legend>
                <TempoMin
                    valueTempoMin={props.valueTempoMin}
                    change={props.change}
                />
                <TempoSec
                    valueTempoSec={props.valueTempoSec}
                    change={props.change}
                />
            </fieldset>
            <fieldset>
                <legend>Planowany czas biegu</legend>
                <TimeH
                    change={props.change}
                    valueTimeH={props.valueTimeH}
                />
                <TimeMin
                    change={props.change}
                    valueTimeMin={props.valueTimeMin}
                />
                <TimeSec
                    change={props.change}
                    valueTimeSec={props.valueTimeSec}
                />
            </fieldset>

        </>
    )
}

export default FormDistance

