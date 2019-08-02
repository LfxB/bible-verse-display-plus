//  home index reducer
const reducer = (state, action) => {
  switch (action.type) {
    case "addToHistory":
      let data = state.filter(item => item.id !== action.id);
      data.unshift({
        id: action.id,
        bookIndex: action.bookIndex,
        chapterIndex: action.chapterIndex,
        verseIndex: action.verseIndex
      });
      return data;
    default:
      return state;
  }
};

//  home index action(s)
export const addToHistory = (bookIndex, chapterIndex, verseIndex) => {
  return {
    type: "addToHistory",
    id: `${bookIndex} ${chapterIndex} ${verseIndex}`,
    bookIndex,
    chapterIndex,
    verseIndex
  };
};

export default reducer;
