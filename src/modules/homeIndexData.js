//  home index reducer
const reducer = (state, action) => {
    switch (action.type) {
        case "selectBook":
            return {
                ...state,
                bookIndex: action.bookIndex,
                chapterIndex: 0
            }
        case "selectChapter":
            return {
                ...state,
                chapterIndex: action.chapterIndex
            }
        default:
            return state;
    }
}

//  home index action(s)
export const selectBook = (bookIndex) => {
    return {
        type: "selectBook",
        bookIndex
    }
}

export const selectChapter = (chapterIndex) => {
    return {
        type: "selectChapter",
        chapterIndex
    }
}

export default reducer;