//  verse window data reducer
const reducer = (state, action) => {
    switch (action.type) {
        case "updateWindowObject":
            return action.window
        default:
            return state;
    }
}

// window object update action
export const updateWindowObject = (window) => {
    return {
        type: "updateWindowObject",
        window
    }
}

export default reducer;