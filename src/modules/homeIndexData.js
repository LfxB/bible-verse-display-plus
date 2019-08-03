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
        case "selectBookAndChapter":
                return {
                    ...state,
                    bookIndex: action.bookIndex,
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

export const selectBookAndChapter = (bookIndex, chapterIndex) => {
    return {
        type: "selectBookAndChapter",
        bookIndex,
        chapterIndex
    }
}

export default reducer;