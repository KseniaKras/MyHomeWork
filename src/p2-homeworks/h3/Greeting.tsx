import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    onKeyPressHandler: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {
        name, setNameCallback, addUser, error, // деструктуризация пропсов
        totalUsers, onKeyPressHandler
    }) => {
    const inputClass = error ? s.error : '' // need to fix with (?:)

    return (
        <div className={s.someClass}>
            <input value={name}
                   onChange={setNameCallback}
                   onKeyPress={onKeyPressHandler}
                   placeholder='Your Name'
                   className={inputClass + ' ' + s.input}/>
            {error && <span>{error}</span>}
            <button onClick={addUser} className={s.btn}>Add</button>
            <span className={s.countUsers}>{totalUsers}</span>
        </div>
    )
}

export default Greeting
