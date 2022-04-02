import React, {ChangeEvent, useState} from 'react'
import {Box, Slider} from "@material-ui/core";


type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: number[] | [number, number]

    // min, max, step, disable, ...
}

function valuetext(value: number) {
    return `${value}`;
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,

        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки

    const handleChange = (e: Event, newValue: number | number[]) => {
        // @ts-ignore
        onChangeRange && onChangeRange(newValue as number[]);
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
                />
            </Box>
        </>
    )
}

export default SuperDoubleRange
