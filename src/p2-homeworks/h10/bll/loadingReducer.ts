
type loadingAT = {
    type: 'IS-LOADING'
    isLoading: boolean
}

type ActionsType = loadingAT

export type InitialStateType = {
    isLoading: boolean
}

const initState: InitialStateType = {
    isLoading: false
}

export const loadingReducer = (state = initState, action: ActionsType): InitialStateType => { // fix any
    switch (action.type) {
        case 'IS-LOADING': {
            debugger
            return {
               ...state,
               isLoading: !action.isLoading
            }
        }
        default: return state
    }
}

export const loadingAC = (isLoading: boolean): loadingAT => ({type: 'IS-LOADING', isLoading}) // fix any