import React from 'react';

const ResultBmi = (props) => {
    const { waga, wzrost } = props
    let result = (waga / (((wzrost / 100) * wzrost) / 100)).toFixed(2)
    if (props.waga > 0 && props.wzrost > 0) {
        if (result < 16.0) {
            result = `${result} - WYGŁODZENIE`;
        } else if (result <= 16.99) {
            result = `${result} - WYCHUDZENIE`;
        } else if (result <= 18.49) {
            result = `${result} - NIEDOWAGA`;
        } else if (result <= 24.99) {
            result = `${result} - PRAWIDŁOWA WAGA`;
        } else if (result <= 29.99) {
            result = `${result}- NADWAGA`;
        } else if (result <= 34.99) {
            result = `${result} - I STOPIEŃ OTYŁOŚCI`;
        } else if (result <= 39.99) {
            result = `${result} - II STOPIEŃ OTYŁOŚCI`;
        } else {
            result = `${result} - III STOPIEŃ OTYŁOŚCI`;
        }
    } else {
        result = "PROSZĘ PODAĆ PRAWIDŁOWE DANE";
    }

    return (
        <>
            <h1>{result}</h1>
        </>
    )
}

export default ResultBmi