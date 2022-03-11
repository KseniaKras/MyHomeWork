import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {InitialStateType, loadingAC} from "./bll/loadingReducer";
import {AppStoreType} from "./bll/store";
import {debug} from "util";


// export type LoadingType = {
//     isLoading: boolean
// }

function HW10() {
    // useSelector, useDispatch
    const dispatch = useDispatch()

    const isLoading: boolean =  useSelector<AppStoreType, boolean>( store => store.loading.isLoading)
    //const loading =  false

    const setLoading = () => {
        dispatch(loadingAC(isLoading))
        debugger;
        setTimeout( ()=>dispatch(loadingAC(!isLoading)),1000 )
        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {isLoading
                ? (
                    <div>крутилка...</div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
