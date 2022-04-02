import React, {useState} from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeC} from "./bll/themeReducer";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";

const themes = ['dark', 'red', 'some'];

function HW12() {
    //const theme = 'some'; // useSelector
     let theme = useSelector<AppStoreType, string>(state => {
         return state.theme.theme
     })
   // const [theme, setTheme] = useState(themes[1])

    const dispatch = useDispatch()

    const onChangeCallback = (theme: string) => {

        //setTheme(theme)
        dispatch(changeThemeC(theme))
    }

    console.log(theme)

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}
            <SuperSelect options={themes} onChangeOption={onChangeCallback}/>
            <SuperRadio options={themes} value={theme} onChangeOption={onChangeCallback}/>

            <hr/>
        </div>
    );
}

export default HW12;
