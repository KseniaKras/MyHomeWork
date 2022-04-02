import React, {useEffect, useState} from 'react';
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import s from './Request.module.css'
import {RequestsAPI} from "./RequestsAPI";


const Request = () => {
    const [state, setState] = useState<boolean | null>(null)
    const [request, setRequest] = useState<string>('')

    const onChangeChecked = (value: boolean) => {
        setState(value)
    }
    const onClickHandler = () => {
        if (state !== null) {
            RequestsAPI.post(state)
                .then(
                    (res) => {
                        setRequest(res.data.errorText)
                    },
                    (err) => {
                        console.log(err)
                        setRequest(err.response ? err.response.data.errorText : err.message)
                    })
        } else {
            setRequest('Please, select checkbox value')
        }
    }

    return (
        <div className={s.requestBlock}>
            <SuperCheckbox onChangeChecked={onChangeChecked}/>
            <SuperButton onClick={onClickHandler}>enter</SuperButton>
            <span>{request}</span>
        </div>
    );
};

export default Request;