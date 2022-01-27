import React from 'react'
import {AffairType} from "./HW2";
import c from './Affairs.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () =>  props.deleteAffairCallback(props.affair._id) // need to fix

    const priorityColor = c[props.affair.priority]

    return (
        <div className={c.someClass}>
            <div className={c.name}>{props.affair.name}</div>
            <div className={c.priority + ' ' + priorityColor}>{props.affair.priority}</div>

            <button className={c.buttonDelete} onClick={() => deleteCallback()}>X</button>
        </div>
    )
}

export default Affair
