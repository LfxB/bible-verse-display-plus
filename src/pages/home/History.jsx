import React from 'react';
import { StateContext } from "../../State"
import { getBookFromIndex } from "../../helpers/bibleHelper"
import { selectBookAndChapter } from "../../modules/homeIndexData"

import "./History.css"

export default class History extends React.Component {
    onVerseClick = (bookIndex, chapterIndex) => {
        const dispatch = this.context[1];
        dispatch(selectBookAndChapter(bookIndex, chapterIndex));
    }

    render = () => {
        const [ { history } ] = this.context;

        if (!history.length) return null;

        return (
            <div className="history-container">
                {history.map((item, key) => {
                    return <p
                    key={key}
                    onClick={() => this.onVerseClick(item.bookIndex, item.chapterIndex)}
                    >
                        {
                        getBookFromIndex(item.bookIndex) + " "
                        + (item.chapterIndex + 1).toString() + ":"
                        + (item.verseIndex + 1).toString()
                        }
                    </p>
                })}
            </div>
        )
    }
}
History.contextType = StateContext;