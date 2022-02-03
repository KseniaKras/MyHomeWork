import React from 'react'

type AlternativeSuperButtonPropsType = {
    name: string
    callback: ()=>void
}

export const AlternativeSuperButton: React.FC<AlternativeSuperButtonPropsType> = ({name, callback}) => {
    const onClickHandler = () => {
        callback()
    }

    return (
        <button onClick={onClickHandler}>
            {name}
        </button>
    )
}