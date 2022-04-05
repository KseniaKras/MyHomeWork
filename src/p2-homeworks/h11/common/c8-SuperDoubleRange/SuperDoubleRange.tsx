import React, {ChangeEvent, useState} from 'react'
import {Box, Slider} from "@material-ui/core";


type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: number[] | [number, number]
    min: number
    max: number

    // min, max, step, disable, ...
}

function valuetext(value: number) {
    return `${value}`;
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        min, max,

        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки
    const [values, setValues] = useState([min, max])

    const handleChange = (e: Event, newValues: number | number[]) => {

        if (!Array.isArray(newValues)) {
            return
        } else {
            onChangeRange && onChangeRange([newValues[0], newValues[1]]);
            setValues([newValues[0], newValues[1]])
        }

    };

    return (
        <>
            <Box sx={{ width: 300 }}>
                <Slider
                    getAriaLabel={() => 'My range'}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                    disableSwap
                />
            </Box>
        </>
    )
}

export default SuperDoubleRange
