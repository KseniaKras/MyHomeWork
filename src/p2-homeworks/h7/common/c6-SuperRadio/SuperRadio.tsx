import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperRadio.module.css'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        debugger
        onChangeOption && onChangeOption(e.currentTarget.value)
        onChange &&  onChange(e)
        // onChange, onChangeOption
    }


    const mappedOptions: any[] = options ? options.map((o, i) => (
        <label key={name + '-' + i}>
            <input
                type={'radio'}
                name={name}       // name, checked, value, onChange
                checked={o === value}
                value={o}
                onChange={onChangeCallback}
                className={s.radio}
            />
            {o}
        </label>
    )) : []

    return (
        <>
            <form>
            {mappedOptions}
            </form>
        </>
    )
}

export default SuperRadio
