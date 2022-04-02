
type initStateType = {
    theme: null | string
}

const initState: initStateType = {
    theme: null
};
type ActionType = ReturnType<typeof changeThemeC>

export const themeReducer = (state = initState, action: ActionType): any => { // fix any
    switch (action.type) {
        case "CHANGE-MAIN-THEME": {
            debugger
            return {
                theme: action.theme
            };
        }
        default: return state;
    }
};

export const changeThemeC = (theme: string): any => ({type: 'CHANGE-MAIN-THEME', theme}); // fix any