import React from 'react'
import Affair from './Affair'
import {AffairPriorityType, AffairType, FilterType} from './HW2'
import c from './Affairs.module.css'

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () =>  props.setFilter('all')   // need to fix
    const setHigh = () => { props.setFilter('high') }
    const setMiddle = () => { props.setFilter('middle') }
    const setLow = () => { props.setFilter('low') }
    const btnFilter = (filter: FilterType) => {
        return c.btn + (props.filter === filter ? ' ' + c.active : '')
    }
    return (
        <div className={c.btns}>

            {mappedAffairs}

            <button className={btnFilter('all')} onClick={setAll}>All</button>
            <button className={btnFilter('high')} onClick={setHigh}>High</button>
            <button className={btnFilter('middle')} onClick={setMiddle}>Middle</button>
            <button className={btnFilter('low')} onClick={setLow}>Low</button>
        </div>
    )
}

export default Affairs
