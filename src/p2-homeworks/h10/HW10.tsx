import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {InitialStateType, loadingAC} from "./bll/loadingReducer";
import {AppStoreType} from "./bll/store";
import s from './HW10.module.css';


// export type LoadingType = {
//     isLoading: boolean
// }

function HW10() {
    // useSelector, useDispatch
    const dispatch = useDispatch()

    const isLoading: boolean = useSelector<AppStoreType, boolean>(store => store.loading.isLoading)
    //const loading =  false

    const setLoading = () => {
        dispatch(loadingAC(isLoading))
        debugger;
        setTimeout(() => dispatch(loadingAC(!isLoading)), 5000)
        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            <div className={s.loadingBlock}>
                {isLoading
                    ? (
                        <div className={s.containerLoader}>
                            <div className={s.ring}/>
                            <div className={s.ring}/>
                            <div className={s.ring}/>
                            <p className={s.loaderText}>Loading...</p>
                        </div>
                    ) : (
                        <div>
                            <SuperButton onClick={setLoading}>set loading...</SuperButton>
                        </div>
                    )
                }
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
