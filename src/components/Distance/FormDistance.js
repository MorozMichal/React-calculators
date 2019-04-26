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
                    changeTempoMin={props.changeTempoMin}
                />
                <TempoSec
                    valueTempoSec={props.valueTempoSec}
                    changeTempoSec={props.changeTempoSec}
                />
            </fieldset>
            <fieldset>
                <legend>Planowany czas biegu</legend>
                <TimeH
                    changeTimeH={props.changeTimeH}
                    valueTimeH={props.valueTimeH}
                />
                <TimeMin
                    changeTimeMin={props.changeTimeMin}
                    valueTimeMin={props.valueTimeMin}
                />
                <TimeSec
                    changeTimeSec={props.changeTimeSec}
                    valueTimeSec={props.valueTimeSec}
                />
            </fieldset>

        </>
    )
}

export default FormDistance

