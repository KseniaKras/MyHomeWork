import {UserType} from "../HW8";


type ActionsType = ReturnType<typeof sortAC> | ReturnType<typeof checkAC>


export const homeWorkReducer = (state: UserType[], action: ActionsType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            // need to fix
            if (action.payload === 'up') {
                let newState = [...state]
                return newState.sort((a, b) => a.name > b.name ? 1 : -1)
            } else if (action.payload === 'down') {
                let newState = [...state]
                return newState.sort((a, b) => a.name > b.name ? -1 : 1)
            } else {
                return state
            }
        }
        case 'check': {
            // need to fix
            return state.filter(f => f.age >= action.payload)

        }
        default:
            return state
    }
}

const sortAC = (value: string) => ({type: 'sort', payload: value})
const checkAC = (age: number) => ({type: 'check', payload: age})


